import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next'
import type { ApiContext } from 'types/data'
import { useRouter } from 'next/router'
import UserGotRewardListContainer from 'containers/UserGotRewardListContainer'
import Layout from "components/templates/Layout";
import Text from "components/atoms/Text";
import Box from "components/layout/Box";
import getUser from 'services/users/get-user'
import getAllUsers from 'services/users/get-all-users'
import getAllGotRewards from 'services/rewards/get-all-gotrewards'


type GotRewardPageProps = InferGetStaticPropsType<typeof getStaticProps>

const GotRewardPage: NextPage<GotRewardPageProps> = ({
  id,
  gotrewards
}: GotRewardPageProps) => {
  const router = useRouter()

  if(router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <Box $textAlign='center' $marginTop={6}><Text $color='text' $fontSize='mediumLarge' $fontWeight='400'>ご褒美獲得記録</Text></Box>
      <Box>
        <Box><UserGotRewardListContainer userId={id} gotrewards={gotrewards} /></Box>
      </Box>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const context: ApiContext = {
    apiRootUrl: process.env.API_BASE_URL || 'http://localhost:5000',
  }
  const users = await getAllUsers(context)
  const paths = users.map((u) => `/users/${u.id}/reward/get`)

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
  const [user, gotrewards] = await Promise.all([
    getUser(context, { id: userId }),
    getAllGotRewards(context, { userId }),
  ])

  return {
    props: {
      id: userId,
      user,
      gotrewards: gotrewards ?? [],
    },
    revalidate: 10,
  }
}

export default GotRewardPage
