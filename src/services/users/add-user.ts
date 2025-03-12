import type { ApiContext, User } from 'types/data'
import { fetcher } from 'utils'

export type AddUsersParams = {
  /**
   * 追加する商品
   */
  user: Partial<User>
  
}

/**
 * プロダクトAPI（新規追加）
 * @param context APIコンテキスト
 * @param params 新規追加する商品
 * @returns 新規追加した商品
 */
const addUser = async (
  id: number,
  context: ApiContext,
  { user }: AddUsersParams,
): Promise<User> => {

  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
}

export default addUser