import type { ApiContext, GotReward } from 'types/data'
import { fetcher } from 'utils'

export type AddGodRewardsParams = {
  /**
   * 追加する商品
   */
  gotreward: Omit<GotReward, 'id'>
}

/**
 * プロダクトAPI（新規追加）
 * @param context APIコンテキスト
 * @param params 新規追加する商品
 * @returns 新規追加した商品
 */
const addGodReward = async (
  context: ApiContext,
  { gotreward }: AddGodRewardsParams,
): Promise<GotReward> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/gotrewards`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(gotreward),
  })
}

export default addGodReward