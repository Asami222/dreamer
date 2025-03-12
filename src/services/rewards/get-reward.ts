import type { ApiContext, Reward } from 'types/data'
import { fetcher } from 'utils'

export type GetTodoParams = {
  /**
   * 取得する商品
   */
  id: number
}

/**
 * プロダクトAPI（個別取得）
 * @param context APIコンテキスト
 * @param params 商品ID
 * @returns 商品
 */
const getReward = async (
  context: ApiContext,
  { id }: GetTodoParams,
): Promise<Reward> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/rewards/${id}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
}

export default getReward