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
import TodoForm from '.'



describe('TodoForm', () => {
  let renderResult: RenderResult
  let handleTodoSave: jest.Mock
  let mockSetValue: jest.Mock

  //スタブ
  global.URL.createObjectURL = () => 'https://test.com'

  beforeEach(() => {
    //ダミー
    handleTodoSave = jest.fn()
    mockSetValue = jest.fn()
    renderResult = render(
      <ThemeProvider theme={theme}>
        <TodoForm onTodoSave={handleTodoSave} title='年' value={3} setValue={mockSetValue}/>
      </ThemeProvider>
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  it('フォーム入力後、onTodoSaveが呼ばれる', async () => {
    await act(async () => {
      
      //Todoを入力
      const inputTodoNode = screen.getByPlaceholderText(
        /やること/,
      ) as HTMLInputElement
      fireEvent.change(inputTodoNode, { target: { value: '本を読む'}})

      //期限を入力
      const inputLimitNode = screen.getByPlaceholderText(
        /1/,
      ) as HTMLInputElement
      fireEvent.change(inputLimitNode, { target: { value: '3'}})

      //詳細を入力
      const inputDetailNode = screen.getByPlaceholderText(
        /詳細/,
      ) as HTMLInputElement
      fireEvent.change(inputDetailNode, { target: { value: '3月までに'}})

      //イメージ画像を入力
      const element = await screen.findByTestId('dropzone')
      fireEvent.drop(element, {
        dataTransfer: {
        files: [
          new File(['dummy'],'chucknorris.png', {type: 'image/png'}),
        ],
      },
      })
      //追加するボタンをクリック
      fireEvent.click(screen.getByText('追加する'))
    })

    //handleTodoSaveが呼ばれていることを確認
    expect(handleTodoSave).toHaveBeenCalledTimes(1)
  })

  it('Todo未入力では、バリデーションエラーでonTodoSaveが呼ばれない', async () => {
    await act(async () => {
      //期限を入力
      const inputLimitNode = screen.getByPlaceholderText(
        /1/,
      ) as HTMLInputElement
      fireEvent.change(inputLimitNode, { target: { value: { value: '3'}}})

      //詳細を入力
      const inputDetailNode = screen.getByPlaceholderText(
        /詳細/,
      ) as HTMLInputElement
      fireEvent.change(inputDetailNode, { target: { value: { value: '3月までに'}}})

      //追加するボタンをクリック
      fireEvent.click(screen.getByText('追加する'))
    })

    //handleTodoSaveが呼ばれていないことを確認
    expect(handleTodoSave).toHaveBeenCalledTimes(0)
  })

})