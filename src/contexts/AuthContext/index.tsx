import React,{ useContext} from "react";
import useSWR from "swr";
import signin from "services/auth/signin";
import signout from "services/auth/signout";
import newsignin from "services/auth/register";
import newAddUser from "services/users/new-add-user";
import type { ApiContext, User } from "types/data";
//import { fetcher2 } from "utils";
/*
const authUser = {
      id: 1,
      username: "taketo",
      password: "100",
      profileImageUrl: "/users/1.png",
      numberOfStars: 20,
      dream: "医者"
};
*/
type AuthContextType = {
  authUser? : User
  isLoading: boolean
  newsignin: (username: string, password: string) => Promise<void>
  signin: (username: string, password: string) => Promise<void>
  signout: () => Promise<void>
  mutate: ( data?: User | Promise<User>, shouldRevalidate?: boolean ) => Promise<User | undefined> 
}
//shouldRevalidate⇒データ取得とデータキャッシュ化の実行有無
type AuthContextProviderProps = {
  context: ApiContext
  authUser?: User
}

const AuthContext = React.createContext<AuthContextType>({
  authUser: undefined,
  isLoading: false,
  newsignin: async () => Promise.resolve(),
  signin: async () => Promise.resolve(),
  signout: async () => Promise.resolve(),
  mutate: async () => Promise.resolve(undefined),
})

export const useAuthContext = (): AuthContextType => useContext<AuthContextType>(AuthContext)

export const AuthContextProvider = ({
  context,
  authUser,
  children,
}: React.PropsWithChildren<AuthContextProviderProps>) => {
  const { data, error, mutate } = useSWR<User>(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/me`
  )
  const isLoading = !data && !error
  
  const signinInternal = async (username: string, password: string) => {
    await signin(context, { username, password})
    await mutate()
  }

  const newsigninInternal = async (username: string, password: string) => {
    const user = await newsignin(context, { username, password})
    const user2 = await newAddUser(context, {user})
    await mutate(user2)
  }

  const signoutInternal = async () => {
    await signout(context)
    await mutate()
  }

  return (
    <AuthContext.Provider
    value={{
      authUser: data ?? authUser,
      isLoading,
      newsignin: newsigninInternal,
      signin: signinInternal,
      signout: signoutInternal,
      mutate,
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}
