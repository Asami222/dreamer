import { useEffect } from 'react'
import { Fragment } from "react";
import RewardCard from "components/organisms/RewardCard";
import type { Reward, ApiContext, User } from "types/data";
import Flex from "components/layout/Flex";
import { useMyRewardsContext } from 'contexts/RewardContext';
import useSearch from "services/rewards/use-search";
import deleteReward from "services/rewards/deleteReward";
import { useGlobalSpinnerActionsContext } from "contexts/GlobalSpinnerContext";
import { useRouter } from 'next/navigation';

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || '/api/proxy',
}

interface UserRewardListContainerProps {
  user: User
  userId: number
  rewards: Reward[]
}

const UserRewardListContainer = ({
  userId,
  rewards,
  user
}: UserRewardListContainerProps) => {

  const { rewards: userRewards } = useSearch(context, {
    userId,
    initial: rewards,
  })
  const router = useRouter();
  const setGlobalSpinner = useGlobalSpinnerActionsContext()
  const {myRewards, setReward, removeReward} = useMyRewardsContext()
  useEffect(() => {
    setReward(userRewards)
  }, [setReward, userRewards]);
  const handleRemoveButtonClick = async(rewardId: number) => {
    removeReward(rewardId)
    try {
      setGlobalSpinner(true)
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
  
  return (
    <Flex $flexDirection="column" $gap="32px" $marginTop={myRewards?.length === 0 ? 0 : '32px'}>
      { myRewards.map((p) => (
        <Fragment key={p.id} >
          <RewardCard
          rewardId={p.id}
          rewardImageUrl={p.imageUrl}
          reward={p.name}
          newuser={user}
          starNum={p.starPieces}
          onRemoveButtonClick={handleRemoveButtonClick}
          item={p}
          />
        </Fragment>
      ))}
    </Flex>
  )
}

export default UserRewardListContainer

