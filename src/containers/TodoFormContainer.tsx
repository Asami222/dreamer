import { useState } from "react";
import TodoForm, {TodoFormData} from "components/organisms/TodoForm";
import { useAuthContext } from "contexts/AuthContext";
import { useGlobalSpinnerActionsContext } from "contexts/GlobalSpinnerContext";
import addTodo from "services/todos/add-todo";
import { ApiContext, Todo, Category2 } from "types/data";
import { useTotalStarContext } from 'contexts/TotalStarContext';
import { useMyTodosContext } from "contexts/TodoContext";
import { chooseImage, imageData3 } from "utils";

const categoryNameDict: Record<Category2, string> = {
  year: '年',
  month: '月',
  week: '週',
  day: '日',
  time: '時間',
}

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || '/api/proxy',
}

interface TodoFormContainerProps {
  onSave?: (error?: Error, todo?: Todo) => void
  category: Category2
}

const TodoFormContainer = ({
  onSave,
  category,
}: TodoFormContainerProps) => {
  const { authUser } = useAuthContext()
  const setGlobalSpinner = useGlobalSpinnerActionsContext()
  const { createTodo } = useMyTodosContext()
  const [selectedStars, setSelectedStars] = useState(0)
  const { totalStar, addStar } = useTotalStarContext()
  const image = chooseImage(imageData3)

  const handleSave = async (data: TodoFormData) => {
    
    if(!authUser) return

    let todoImage
    if(!data.image) { todoImage = ''
    } else {todoImage = image}

    let limit
    if(data.limit1 && data.limit2) {
      limit = data.limit1.concat(data.limit2);
    } else {
      limit = data.limit1 || data.limit2
    }

    addStar(totalStar)
    
    const todo = {
      image: data.image,
      todo: data.todo,
      limit: limit,
      detail: data.detail,
      description: data.description,
      starNum: selectedStars,
      category: category,
      imageUrl: todoImage,
      blurDataUrl: '',
      owner: authUser,
    }

    try {
      setGlobalSpinner(true)
      const ret = await addTodo(context, { todo })
      createTodo(ret)
       //eslint-disable-next-line @typescript-eslint/no-unused-expressions
      onSave && onSave(undefined, ret)
    } catch (err: unknown) {
      if(err instanceof Error) {
        window.alert(err.message)
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        onSave && onSave(err)
      }
    } finally {
      setGlobalSpinner(false)
    }
  }
  return <TodoForm onTodoSave={handleSave} title={categoryNameDict[category as Category2]} value={selectedStars} setValue={setSelectedStars} />
}

export default TodoFormContainer
