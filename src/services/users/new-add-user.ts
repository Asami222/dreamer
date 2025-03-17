import type { ApiContext, NewUser, User } from 'types/data'
import { fetcher } from 'utils'

export type NewAddUsersParams = {
  user: NewUser
}
 
const newAddUser = async (
  context: ApiContext,
  { user }: NewAddUsersParams,
): Promise<User> => {

  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/users`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
}
export default newAddUser