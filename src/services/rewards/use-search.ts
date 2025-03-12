import useSWR from 'swr'
import type { ApiContext, Reward } from 'types/data'

export type UseSearchProps = {
  userId?: number
  sort?: keyof Omit<Reward, 'owner'>
  order?: 'asc' | 'desc'
  initial?: Reward[]
}

export type UseSearch = {
  /**
   * 検索にヒットした商品リスト
   */
  rewards: Reward[]
  /**
   * ロードフラグ
   */
  isLoading: boolean
  /**
   * エラーフラグ
   */
  isError: boolean
}

/**
 * プロダクトAPI（一覧取得）のカスタムフック
 * @param context APIコンテキスト
 * @param params 検索条件
 * @returns 商品一覧とAPI呼び出しの状態
 */
const useSearch = (
  context: ApiContext,
  {
    userId,
    initial,
    sort = 'id',
    order = 'desc',
  }: UseSearchProps = {},
): UseSearch => {
  const path = `${context.apiRootUrl.replace(/\/$/g, '')}/rewards`
  const params = new URLSearchParams()

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  userId && params.append('owner.id', `${userId}`)
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  sort && params.append('_sort', sort)
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  order && params.append('_order', order)
  const query = params.toString()
  const { data, error } = useSWR<Reward[]>(
    query.length > 0 ? `${path}?${query}` : path,
  )

  return {
    rewards: data ?? initial ?? [],
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useSearch