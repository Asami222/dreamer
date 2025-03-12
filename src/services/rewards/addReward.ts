import type { ApiContext, Reward } from 'types/data'
import { fetcher } from 'utils'

export type AddRewardsParams = {
  /**
   * 追加する商品
   */
  reward: Omit<Reward, 'id'>
}

/**
 * プロダクトAPI（新規追加）
 * @param context APIコンテキスト
 * @param params 新規追加する商品
 * @returns 新規追加した商品
 */
const addReward = async (
  context: ApiContext,
  { reward }: AddRewardsParams,
): Promise<Reward> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/rewards`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reward),
  })
}

export default addReward