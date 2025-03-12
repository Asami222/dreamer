import useSWR from 'swr'
import type { ApiContext, GotReward } from 'types/data'

export type UseSearchProps = {
  userId?: number
  sort?: keyof Omit<GotReward, 'owner'>
  order?: 'asc' | 'desc'
  initial?: GotReward[]
}

export type UseGotSearch = {
  /**
   * 検索にヒットした商品リスト
   */
  gotrewards: GotReward[]
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
const useGotSearch = (
  context: ApiContext,
  {
    userId,
    initial,
    sort = 'id',
    order = 'desc',
  }: UseSearchProps = {},
): UseGotSearch => {
  const path = `${context.apiRootUrl.replace(/\/$/g, '')}/gotrewards`
  const params = new URLSearchParams()

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  userId && params.append('owner.id', `${userId}`)
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  sort && params.append('_sort', sort)
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  order && params.append('_order', order)
  const query = params.toString()
  const { data, error } = useSWR<GotReward[]>(
    query.length > 0 ? `${path}?${query}` : path,
  )

  return {
    gotrewards: data ?? initial ?? [],
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useGotSearch