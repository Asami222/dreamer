import { useEffect } from 'react'
import { Fragment } from "react";
import GotRewardCard from "components/organisms/GotRewardCard";
import useSearch from "services/rewards/use-gotsearch";
import type { ApiContext, GotReward} from "types/data";
import Flex from "components/layout/Flex";
import { useGotRewardContext } from "contexts/GotRewardContext";
import { useGlobalSpinnerActionsContext } from "contexts/GlobalSpinnerContext";
import { useRouter } from 'next/navigation';
import deleteGotReward from "services/rewards/deleteGotRewards";

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || '/api/proxy',
}

interface UserGotRewardListContainerProps {
  userId: number
  gotrewards?: GotReward[]
}

const UserGotRewardListContainer = ({
  userId,
  gotrewards
}: UserGotRewardListContainerProps) => {
  const { gotrewards: userGotRewards } = useSearch(context, {
    userId,
    initial: gotrewards,
  })
  const router = useRouter();
  const setGlobalSpinner = useGlobalSpinnerActionsContext()
  const { gotRewards, removegotRewardFromPage, setgotRewardToPage } =useGotRewardContext()
  useEffect(() => {
  setgotRewardToPage(userGotRewards)
}, [setgotRewardToPage, userGotRewards]);
  const handleRemoveButtonClick = async(id: number) => {
    removegotRewardFromPage(id)
    try {
      setGlobalSpinner(true)
      await deleteGotReward(context,{id})
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
    <Flex $flexDirection="column" $gap="16px" $marginTop={gotRewards.length === 0 ? 0 : '32px'}>
      { gotRewards.map((p) => (
        <Fragment key={p.id} >
          <GotRewardCard
          id={p.id}
          gotreward={p.name}
          starNum={p.starPieces}
          onRemoveButtonClick={handleRemoveButtonClick}
          time={p.time}
          />
        </Fragment>
      ))}
    </Flex>
  )
}

export default UserGotRewardListContainer

