import { ThemeProvider } from 'styled-components'
import {
  render,
  act,
  screen,
  fireEvent,
  RenderResult,
} from '@testing-library/react'
//import userEvent from '@testing-library/user-event'
import { theme } from 'themes'
import UserForm from '.'



describe('UserForm', () => {
  let renderResult: RenderResult
  let handleUserSave: jest.Mock

  //スタブ
  global.URL.createObjectURL = () => 'https://test.com'

  beforeEach(() => {
    //ダミー
    handleUserSave = jest.fn()

    renderResult = render(
      <ThemeProvider theme={theme}>
        <UserForm onSave={handleUserSave} />
      </ThemeProvider>
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  it('フォーム入力後、onUserSaveが呼ばれる', async () => {
    await act(async () => {

      //プロフィールイメージ画像を入力
      const element = await screen.findByTestId('dropzone')
      fireEvent.drop(element, {
        dataTransfer: {
        files: [
          new File(['dummy'],'chucknorris.png', {type: 'image/png'}),
        ],
      },
      })
      
      //表示名を入力
      const inputTodoNode = screen.getByPlaceholderText(
        /表示名/,
      ) as HTMLInputElement
      fireEvent.change(inputTodoNode, { target: { value: 'testname'}})

      //夢または目標を入力
      const inputLimitNode = screen.getByPlaceholderText(
        /夢や目標/,
      ) as HTMLInputElement
      fireEvent.change(inputLimitNode, { target: { value: '看護師になりたい'}})

      //叶える時期を入力
      const inputDetailNode = screen.getByPlaceholderText(
        /いつまでに/,
      ) as HTMLInputElement
      fireEvent.change(inputDetailNode, { target: { value: '2030年までに'}})
      
      //変更するボタンをクリック
      fireEvent.click(screen.getByText('変更する'))
    })

    //handleTodoSaveが呼ばれていることを確認
    expect(handleUserSave).toHaveBeenCalledTimes(1)
  })
})