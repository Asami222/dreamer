import useSWR from 'swr'
import type { ApiContext, Todo } from 'types/data'

export type UseTodoProps = {
  /**
   * 取得する商品ID
   */
  id: number
  /**
   * 初期状態
   */
  initial?: Todo
}

export type UseTodo = {
  /**
   * 取得する商品
   */
  todo?: Todo
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
const useTodo = (
  context: ApiContext,
  { id, initial }: UseTodoProps,
): UseTodo => {
  const { data, error } = useSWR<Todo>(
    `${context.apiRootUrl.replace(/\/$/g, '')}/todos/${id}`,
  )

  return {
    todo: data ?? initial,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useTodo