
import { Meta } from '@storybook/react'
import Header from '.'
import { AuthContextProvider } from 'contexts/AuthContext'

export default {title: 'organisms/Header'} as Meta<typeof Header>

export const NoLogin = () => <Header />

export const Login = () => {
  const authUser = {
    id: 1,
    username: 'dummy',
    password: '345',
    displayName: 'Taketo Ypshida',
    profileImageUrl: '/images/bear1.png',
    dream: '医者',
    limit: '2028年',
    numberOfStars: 20
  }

  const ChildComponent = () => {
   return <Header />
  }
  return (
    <AuthContextProvider context={{ apiRootUrl: 'https://dummy'}} authUser={authUser}>
      <ChildComponent />
    </AuthContextProvider>
  )
}

