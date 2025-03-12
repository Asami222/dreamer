import type { ApiContext, Todo } from 'types/data'
import { fetcher } from 'utils'

export type DeleteTodoParams = {
  /**
   * 追加する商品
   */
  id: number
}

/**
 * プロダクトAPI（新規追加）
 * @param context APIコンテキスト
 * @param params 新規追加する商品
 * @returns 新規追加した商品
 */
const deleteTodo = async (
  context: ApiContext,
  { id }: DeleteTodoParams,
): Promise<Todo> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/todos/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  })
}

export default deleteTodo