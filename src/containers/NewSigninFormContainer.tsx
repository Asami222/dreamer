import NewSigninForm from "components/organisms/NewSigninForm";
import { useAuthContext } from "contexts/AuthContext";
import { useGlobalSpinnerActionsContext } from "contexts/GlobalSpinnerContext";

interface NewSigninFormContainerProps {
  onNewSignin: (error?: Error) => void
}

const NewSigninFormContainer = ({
  onNewSignin,
}: NewSigninFormContainerProps) => {

  const { newsignin } = useAuthContext()
  const setGlobalSpinner = useGlobalSpinnerActionsContext()

  const handleSignin = async (username: string, passward: string) => {
    try {
      setGlobalSpinner(true)
      await newsignin(username, passward)
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      onNewSignin && onNewSignin()
    } catch(err: unknown) {
      if(err instanceof Error) {
        window.alert(err.message)
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        onNewSignin && onNewSignin(err)
      }
    } finally {
      setGlobalSpinner(false)
    }
  }

  return <NewSigninForm onSign={handleSignin}/>
  
}

export default NewSigninFormContainer
