import type { ApiContext, Todo } from 'types/data'
import { fetcher } from 'utils'

export type AddProductsParams = {
  /**
   * 追加する商品
   */
  todo: Omit<Todo, 'id'>
}

/**
 * プロダクトAPI（新規追加）
 * @param context APIコンテキスト
 * @param params 新規追加する商品
 * @returns 新規追加した商品
 */
const addTodo = async (
  context: ApiContext,
  { todo }: AddProductsParams,
): Promise<Todo> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/todos`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  })
}

export default addTodo