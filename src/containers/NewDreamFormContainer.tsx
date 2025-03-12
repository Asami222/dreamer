import { useAuthContext } from "contexts/AuthContext";
import { useGlobalSpinnerActionsContext } from "contexts/GlobalSpinnerContext";
import { ApiContext, User } from "types/data";
import addUser from "services/users/add-user";
import NewDreamForm, { NewDreamFormData} from "components/organisms/NewDreamForm";

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || '/api/proxy',
}

interface NewDreamFormContainerProps {
  onSave: (error?: Error, user?: User,) => void
}

const NewDreamFormContainer = ({
  onSave,
}: NewDreamFormContainerProps) => {
  const { authUser } = useAuthContext()
  const setGlobalSpinner = useGlobalSpinnerActionsContext()

  const handleSave = async (data: NewDreamFormData) => {
    if(!authUser) return

    const user = {
      dream: data.dream,
      limit: data.limit,
    }

    const id = authUser.id
    console.log(id)

    try {
      setGlobalSpinner(true)
      const ret = await addUser(id, context, { user }, )
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
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

  return <NewDreamForm onSave={handleSave}/>

}

export default NewDreamFormContainer