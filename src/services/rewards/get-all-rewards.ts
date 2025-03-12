import type { ApiContext, Reward } from 'types/data'
import { fetcher } from 'utils'

export type GetAllRewardsParams = {
  sort?: keyof Omit<Reward, 'owner'>
  order?: 'asc' | 'desc'
  limit?: number
  page?: number
  userId?: number
}

/**
 * プロダクトAPI（一覧取得）
 * @param context APIコンテキスト
 * @param params 検索条件
 * @returns 商品一覧
 */

const getAllRewards = async (
  context: ApiContext,
  {
    page,
    limit,
    userId,
    sort = 'id',
    order = 'desc',
  }: GetAllRewardsParams = {},
): Promise<Reward[]> => {
  const path = `${context.apiRootUrl.replace(/\/$/g, '')}/rewards`
  const params = new URLSearchParams()

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  userId && params.append('owner.id', `${userId}`)
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  page && params.append('_page', `${page}`)
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  limit && params.append('_limit', `${limit}`)
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  sort && params.append('_sort', sort)
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  order && params.append('_order', order)
  const query = params.toString()

  return await fetcher(query.length > 0 ? `${path}?${query}` : path, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

export default getAllRewards