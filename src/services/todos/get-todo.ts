import type { ApiContext, Todo } from 'types/data'
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
const getTodo = async (
  context: ApiContext,
  { id }: GetTodoParams,
): Promise<Todo> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/todos/${id}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
}

export default getTodo