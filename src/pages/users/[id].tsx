import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next'
//import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Separator from 'components/atoms/Separator'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'
import Text from 'components/atoms/Text'
import Layout from 'components/templates/Layout'
import UserRewardListContainer from 'containers/UserRewardListContainer'
import UserProfileContainer from 'containers/UserProfileContainer'
import getAllRewards from 'services/rewards/get-all-rewards'
import getAllUsers from 'services/users/get-all-users'
import getUser from 'services/users/get-user'
import type { ApiContext } from 'types/data'
import { GotRewardContextProvider } from 'contexts/GotRewardContext'
//import { useAuthGuard } from 'utils/hooks'

type UserPageProps = InferGetStaticPropsType<typeof getStaticProps>

const UserPage: NextPage<UserPageProps> = ({
  id,
  user,
  rewards,
}: UserPageProps) => {
  
  const router = useRouter()
  
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  
  return (
    <GotRewardContextProvider>
    <Layout>
      <Flex $flexDirection="column" $gap="40px" $margin="24px 0 64px">
        <Box>
            <UserProfileContainer userId={id} user={user} />
            <Separator />
        </Box>
        <Box $margin="0 auto">
            <Box $textAlign='center'><Text $color='text' $fontWeight='400' $fontSize='mediumLarge' >ご褒美</Text></Box>
            <Box>
              <Box><UserRewardListContainer userId={id} rewards={rewards} user={user}/></Box>
            </Box>
        </Box>
      </Flex>
    </Layout>
    </GotRewardContextProvider>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const context: ApiContext = {
    apiRootUrl: process.env.API_BASE_URL || 'http://localhost:5000',
  }
  const users = await getAllUsers(context)
  const paths = users.map((u) => `/users/${u.id}`)

  return { paths, fallback: true }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const context: ApiContext = {
    apiRootUrl: process.env.API_BASE_URL || 'http://localhost:5000',
  }

  if (!params) {
    throw new Error('params is undefined')
  }

  // ユーザー情報と ユーザーの所持する商品を取得し、静的ページを作成
  // 10秒でrevalidateな状態にし、静的ページを更新する
  const userId = Number(params.id)
  const [user, rewards] = await Promise.all([
    getUser(context, { id: userId }),
    getAllRewards(context, { userId }),
  ])

  return {
    props: {
      id: userId,
      user,
      rewards: rewards ?? [],
    },
    revalidate: 10,
  }
}

export default UserPage