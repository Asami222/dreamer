import useSWR from 'swr'
import type { ApiContext, GotReward } from 'types/data'

export type UseGotRewardProps = {
  /**
   * 取得する商品ID
   */
  id: number
  /**
   * 初期状態
   */
  initial?: GotReward
}

export type UseGotReward = {
  /**
   * 取得する商品
   */
  reward?: GotReward
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
 * プロダクトAPI（個別取得）のカスタムフック
 * @param context APIコンテキスト
 * @param params 商品IDと初期状態
 * @returns 商品とAPI呼び出しの状態
 */
const useGotReward = (
  context: ApiContext,
  { id, initial }: UseGotRewardProps,
): UseGotReward => {
  const { data, error } = useSWR<GotReward>(
    `${context.apiRootUrl.replace(/\/$/g, '')}/gotrewards/${id}`,
  )

  return {
    reward: data ?? initial,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useGotReward