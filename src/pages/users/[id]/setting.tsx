import type { NextPage } from 'next'
import { useRouter } from 'next/router'
//import Box from 'components/layout/Box'
//import Flex from 'components/layout/Flex'
import Layout from 'components/templates/Layout'
import Box from 'components/layout/Box'
import UserFormContainer from 'containers/UserFormContainer'
import { useAuthContext } from 'contexts/AuthContext'
import { useAuthGuard } from 'utils/hooks'

const UserSettingPage: NextPage = () => {
  const router = useRouter()
  const { authUser } = useAuthContext()

  const handleSave = (err?: Error) => {
    if(authUser && !err) {
      router.push(`/users/${authUser.id}`)
    }
  }
  useAuthGuard()

  return (
    <Layout>
      <Box $marginTop={4} $marginBottom="80px">
        <UserFormContainer onSave={handleSave}/>
      </Box>
    </Layout>
  )
}

export default UserSettingPage
