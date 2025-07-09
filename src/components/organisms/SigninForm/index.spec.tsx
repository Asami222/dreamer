import { ThemeProvider } from 'styled-components'
import {
  render,
  act,
  screen,
  fireEvent,
  RenderResult,
} from '@testing-library/react'
import { theme } from 'themes'
import SigninForm from '.'

describe('SigninForm', () => {
  let renderResult: RenderResult
  let handleSignin: jest.Mock

  beforeEach(() => {
    //ダミー関数
    handleSignin = jest.fn()
    renderResult = render(
      <ThemeProvider theme={theme}>
        <SigninForm onSign={handleSignin} />
      </ThemeProvider>
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  it('ユーザー名とパスワード入力後、onSigninが呼ばれる', async () => {
    await act(async () => {
      //ユーザー名入力
      const inputUsernameNode = screen.getByPlaceholderText(
        /ユーザー名/,
      ) as HTMLInputElement
      fireEvent.change(inputUsernameNode, { target: { value: 'user'}})
      const inputPasswordNode = screen.getByPlaceholderText(
        /パスワード/,
      ) as HTMLInputElement
      fireEvent.change(inputPasswordNode, { target: { value: 'password'}})
      //サインインボタンをクリック
      fireEvent.click(screen.getByText('ログイン'))
    })

    //handleSigninが呼ばれたことを確認
    expect(handleSignin).toHaveBeenCalledTimes(1)
  })

  it('ユーザー名入力だけでは、バリデーションエラーでonSigninが呼ばれない', async () => {
    await act(async () => {
      //ユーザー名入力
      const inputUsernameNode = screen.getByPlaceholderText(
        /ユーザー名/,
      ) as HTMLInputElement
      fireEvent.change(inputUsernameNode, { target: { value: 'user'}})
      //サインインボタンをクリック
      fireEvent.click(screen.getByText('ログイン'))
    })

    //handleSigninが呼ばれていないことを確認
    expect(handleSignin).toHaveBeenCalledTimes(0)
  })
})