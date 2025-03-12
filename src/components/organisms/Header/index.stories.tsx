
import { Meta } from '@storybook/react'
import Header from '.'
import { AuthContextProvider } from 'contexts/AuthContext'

export default {title: 'organisms/Header'} as Meta<typeof Header>

export const NoLogin = () => <Header />

export const Login = () => {
  const authUser = {
    id: 1,
    username: 'dummy',
    displayName: 'Taketo Ypshida',
    email: 'test@example.com',
    profileImageUrl: '/images/bear1.png',
    description: '',
    dream: '医者',
    period: '2028年'
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

