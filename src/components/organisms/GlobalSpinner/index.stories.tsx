import { Meta } from '@storybook/react'
import GlobalSpinner from '.'
import GlobalSpinnerContextProvider, { useGlobalSpinnerActionsContext } from 'contexts/GlobalSpinnerContext'
import Button1 from 'components/atoms/Button1'

export default {
  title: 'Organisms/GlobalSpinner',
} as Meta<typeof GlobalSpinner>

export const WithContextProvider = () => {
  const ChildComponent = () => {
    const setGlobalSpinner = useGlobalSpinnerActionsContext()
    const handleClick = () => {
      setGlobalSpinner(true)
      setTimeout(() => {
        setGlobalSpinner(false)
      }, 5000)
    }
    return (
      <>
        <GlobalSpinner />
        <Button1 onClick={handleClick}>スピナー表示</Button1>
      </>
    )
  }

  return (
    <GlobalSpinnerContextProvider>
      <ChildComponent />
    </GlobalSpinnerContextProvider>
  )
}