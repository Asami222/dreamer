import SigninForm from "components/organisms/SigninForm";
import { useAuthContext } from "contexts/AuthContext";
import { useGlobalSpinnerActionsContext } from "contexts/GlobalSpinnerContext";


interface SigninFormContainerProps {
  onSignin: (error?: Error) => void
}

const SigninFormContainer = ({
  onSignin,
}: SigninFormContainerProps) => {
  
  const { signin } = useAuthContext()
  const setGlobalSpinner = useGlobalSpinnerActionsContext()
  
  const handleSignin = async (username: string, passward: string) => {
    try {
      setGlobalSpinner(true)
      await signin(username, passward)
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      onSignin && onSignin()
    } catch(err: unknown) {
      if(err instanceof Error) {
        window.alert(err.message)
      }
    } finally {
      setGlobalSpinner(false)
    }
  }

  return <SigninForm onSign={handleSignin}/>
}

export default SigninFormContainer
