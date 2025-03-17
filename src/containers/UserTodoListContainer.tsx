
import TodoPage from "components/organisms/TodoPage"
import { useTotalStarContext } from "contexts/TotalStarContext"
import Flex from "components/layout/Flex"
import useSearch from "services/todos/use-search"
//import useUser from "services/users/use-user"
import addUser from "services/users/add-user"
import deleteTodo from "services/todos/deleteTodo"
import addTodo from "services/todos/add-todo"
import type { ApiContext, Todo, Category, User } from "types/data"
import { useGlobalSpinnerActionsContext } from "contexts/GlobalSpinnerContext";
import { useMyTodosContext } from "contexts/TodoContext"
import { useRouter } from 'next/navigation';

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || '/api/proxy',
}

interface UserTodoListContainerProps {
  userId: number
  user: User
  category: Category
  todos: Todo[]
  period?: string
}

const UserTodoListContainer = ({
  userId, period, category,user,todos
}: UserTodoListContainerProps) => {

  const { removeTodo } = useMyTodosContext()
 
  const { todos: userTodos } = useSearch(context, {
    category,
    userId,
    initial: todos,
  })

  const { addStar } = useTotalStarContext()
  const userHasStar = user.numberOfStars
  const setGlobalSpinner = useGlobalSpinnerActionsContext()
  const router = useRouter();

  const handleCopyTextClick = async(userid: number) => {
    userTodos.filter((item) => item.id === userid);
    const newTodo = userTodos[0]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...todo } = newTodo;
    try {
      setGlobalSpinner(true)
      await addTodo(context,{todo})
      router.refresh();
    } catch (err: unknown) {
      if(err instanceof Error) {
        window.alert(err.message)
      }
    } finally {
      setGlobalSpinner(false)
    }
  }
  const handleRemoveButtonClick = async(id: number, rate: number | undefined, isChecked: boolean | undefined) => {
    if(rate === undefined || isChecked === false || isChecked === undefined){rate = 0 }
    const starRate = userHasStar + rate
    const user = { numberOfStars: starRate}
    removeTodo(id)
    addStar(rate)
    try {
      setGlobalSpinner(true)
      await addUser(userId, context, { user })
      await deleteTodo(context,{id})
      router.refresh();
    } catch (err: unknown) {
      if(err instanceof Error) {
        window.alert(err.message)
      }
    } finally {
      setGlobalSpinner(false)
    }
  }

  return (
    <Flex $flexDirection='column' $gap="8px">
      {userTodos.map((t) => (
        <TodoPage
          key={t.id}
          id={t.id}
          todo={t.todo}
          limit={t.limit}
          limitPeriod={period}
          limitDetail={t.detail}
          imageUrl={t.imageUrl}
          rate={t.starNum}
          description={t.description}
          onCopyTextClick={handleCopyTextClick}
          onRemoveTextClick={handleRemoveButtonClick}
        />
      ))}
    </Flex>
  )
}

export default UserTodoListContainer