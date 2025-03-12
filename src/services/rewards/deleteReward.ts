import type { ApiContext, Reward } from 'types/data'
import { fetcher } from 'utils'

export type DeleteRewardsParams = {
  /**
   * 追加する商品
   */
  rewardId: number
}

/**
 * プロダクトAPI（新規追加）
 * @param context APIコンテキスト
 * @param params 新規追加する商品
 * @returns 新規追加した商品
 */
const deleteReward = async (
  context: ApiContext,
  { rewardId }: DeleteRewardsParams,
): Promise<Reward[]> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/rewards/${rewardId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({rewardId}),
  })
}

export default deleteReward