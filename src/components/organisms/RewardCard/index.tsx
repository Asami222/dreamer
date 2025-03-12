import React, { useState, useEffect } from 'react'
import Image from "next/image";
import styled from "styled-components";
import Button1 from "components/atoms/Button1";
import Text from "components/atoms/Text";
import Box from "components/layout/Box";
import Flex from "components/layout/Flex";
import { StarIcon } from "components/atoms/IconButton";
import { DeleteForeverIcon } from "components/atoms/IconButton";
import { useTotalStarContext } from 'contexts/TotalStarContext';
import { useMyRewardsContext } from 'contexts/RewardContext';
import { useGotRewardContext } from "contexts/GotRewardContext";
import Modal from '../Modal';
import { Reward, User, ApiContext } from 'types/data';
import { formatDate } from 'utils';
import { useGlobalSpinnerActionsContext } from "contexts/GlobalSpinnerContext";
import addUser from "services/users/add-user"
import addGodReward from 'services/rewards/addGotreward';
import deleteReward from 'services/rewards/deleteReward';
import { useRouter } from 'next/navigation';

const RemoveButton = styled(DeleteForeverIcon)`
  &:hover {
    
  }
`
const date = formatDate()

interface RewardCardProps {
  item: Reward
  rewardId: number
  newuser: User
  rewardImageUrl?: string
  reward: string
  starNum: number
  onRemoveButtonClick?: (id: number) => void
  onChangeButtonClick?: (id: number, starNum: number) => void
}

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || '/api/proxy',
}

const RewardCard =({
  rewardId,
  rewardImageUrl,
  reward,
  starNum,
  item,
  newuser,
  onRemoveButtonClick,
}: RewardCardProps) => {

  const [isOpen, setIsOpen] = useState(false)
  const { totalStar, decreStar } = useTotalStarContext()
  const [isPossible, setIsPossible] = useState(false)
  const router = useRouter();
  const { removeReward } =useMyRewardsContext()
  const setGlobalSpinner = useGlobalSpinnerActionsContext()
  const { addgotRewardToPage } = useGotRewardContext()

  const userHasStar = newuser.numberOfStars
  let starRate
  if(userHasStar < starNum){starRate = 0}
  else{starRate = userHasStar - starNum}
  const user = { numberOfStars: starRate}
  const userId = newuser.id

 // eslint-disable-next-line @typescript-eslint/no-unused-vars
 const { id,imageUrl, ...todo } = item;
 const time = {time: date}
 const gotreward = {...todo,...time}


  const onChangeButtonClick = async() => {
    decreStar(starNum)
    setIsOpen(isOpen =>!isOpen)
    removeReward(rewardId)
    addgotRewardToPage({...gotreward, id: item.id})
    try {
      await addUser(userId, context, { user })
      await addGodReward(context,{gotreward})
      await deleteReward(context,{rewardId})
      router.refresh();
    } catch (err: unknown) {
      if(err instanceof Error) {
        window.alert(err.message)
      }
    } finally {
      setGlobalSpinner(false)
    }
  }
    useEffect(() => {
      if(starNum === 0 || totalStar === 0) {
        setIsPossible(false)
      } else if(starNum <= totalStar){
        setIsPossible(true)
      } else {
        setIsPossible(false)
      }
    },[starNum, totalStar])

    console.log(isOpen)
  
  return (
      <Flex $gap="16px" $alignItems='center' $width="320px">
      { rewardImageUrl &&
          <Box $width="100px" $height="98px" $margin="0 auto" $position='relative'>
            <Image
              quality="85"
              src={rewardImageUrl}
              alt="ご褒美イメージ"
              sizes="25.6vw"
              fill
              style={{objectFit:"contain", objectPosition: '50% 50%'}}
              priority
            />
          </Box>
        }
        <Flex $flexDirection="column" $alignItems='center' $gap="8px">
          <Text $fontSize="medium" $color="text" $fontWeight='500'>{reward}</Text>
          <Flex $gap="8px" $alignItems='center'>
            <StarIcon size={32} color="starLight"/>
            <Flex 
              $width="72px" 
              $height="32px" 
              $borderRadius="5px" 
              $backgroundColor="secondary" 
              $justifyContent='center'
              $alignItems='center'
            >
              <Text $fontSize="medium" $color='placeholder'>{starNum}</Text>
            </Flex>
            <Text $fontSize="medium" $color="text">個</Text>
          </Flex>
          <Button1 
            color="text"
            fontSize="small" 
            $borderRadius="5px" 
            $textAlign="center"
            display='inline-block'
            width='104px'
            height='28px'
            $selectColor="Yellow"
            onClick={onChangeButtonClick}
            disabled={isPossible ? false : true}
            >交換する
          </Button1>
          <Modal value={isOpen} setValue={setIsOpen} reward={reward} imageUrl={rewardImageUrl} />
        </Flex>
        <RemoveButton size={32} color="borderDash" onClick={() => onRemoveButtonClick && onRemoveButtonClick(rewardId)}/>
      </Flex>
  )
}

export default RewardCard


