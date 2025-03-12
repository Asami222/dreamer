import useSWR from 'swr'
import type { ApiContext, Reward } from 'types/data'

export type UseRewardProps = {
  /**
   * 取得する商品ID
   */
  id: number
  /**
   * 初期状態
   */
  initial?: Reward
}

export type UseReward = {
  /**
   * 取得する商品
   */
  reward?: Reward
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
const useReward = (
  context: ApiContext,
  { id, initial }: UseRewardProps,
): UseReward => {
  const { data, error } = useSWR<Reward>(
    `${context.apiRootUrl.replace(/\/$/g, '')}/rewards/${id}`,
  )

  return {
    reward: data ?? initial,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useReward