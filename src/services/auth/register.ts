import { ApiContext, User } from 'types/data'
import { fetcher } from 'utils'

export type SigninParams = {
  username: string
  password: string
}

const newsignin = async (
  context: ApiContext,
  params: SigninParams,
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/register`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    },
  )
}

export default newsignin