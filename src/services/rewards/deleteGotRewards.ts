import type { ApiContext, GotReward } from 'types/data'
import { fetcher } from 'utils'

export type DeleteRewardsParams = {
  /**
   * 追加する商品
   */
  id: number
}

/**
 * プロダクトAPI（新規追加）
 * @param context APIコンテキスト
 * @param params 新規追加する商品
 * @returns 新規追加した商品
 */
const deleteGotReward = async (
  context: ApiContext,
  { id }: DeleteRewardsParams,
): Promise<GotReward[]> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/gotrewards/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({id}),
  })
}

export default deleteGotReward