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
import RewardForm from '.'



describe('RewardForm', () => {
  let renderResult: RenderResult
  let handleRewardSave: jest.Mock

  //スタブ
  global.URL.createObjectURL = () => 'https://test.com'

  beforeEach(() => {
    //ダミー
    handleRewardSave = jest.fn()

    renderResult = render(
      <ThemeProvider theme={theme}>
        <RewardForm onRewardSave={handleRewardSave} />
      </ThemeProvider>
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  it('フォーム入力後、onRewardSaveが呼ばれる', async () => {
    await act(async () => {

      //ご褒美イメージ画像を入力
      const element = await screen.findByTestId('dropzone')
      fireEvent.drop(element, {
        dataTransfer: {
        files: [
          new File(['dummy'],'chucknorris.png', {type: 'image/png'}),
        ],
      },
      })
      
      //ご褒美名を入力
      const inputTodoNode = screen.getByPlaceholderText(
        /テディベア/,
      ) as HTMLInputElement
      fireEvent.change(inputTodoNode, { target: { value: 'キャンディ'}})

      //星の数を入力
      const inputLimitNode = screen.getByPlaceholderText(
        /100/,
      ) as HTMLInputElement
      fireEvent.change(inputLimitNode, { target: { value: '10'}})

      //追加するボタンをクリック
      fireEvent.click(screen.getByText('追加する'))
    })

    //handleTodoSaveが呼ばれていることを確認
    expect(handleRewardSave).toHaveBeenCalledTimes(1)
  })

  it('ご褒美名未入力では、バリデーションエラーでonRewardSaveが呼ばれない', async () => {
    await act(async () => {
      //星の数を入力
      const inputLimitNode = screen.getByPlaceholderText(
        /100/,
      ) as HTMLInputElement
      fireEvent.change(inputLimitNode, { target: { value: '10'}})

      //追加するボタンをクリック
      fireEvent.click(screen.getByText('追加する'))
    })

    //handleTodoSaveが呼ばれていないことを確認
    expect(handleRewardSave).toHaveBeenCalledTimes(0)
  })

  it('星の数未入力では、バリデーションエラーでonRewardSaveが呼ばれない', async () => {
    await act(async () => {
     //ご褒美名を入力
      const inputTodoNode = screen.getByPlaceholderText(
        /テディベア/,
      ) as HTMLInputElement
      fireEvent.change(inputTodoNode, { target: { value: 'キャンディ'}})

      //追加するボタンをクリック
      fireEvent.click(screen.getByText('追加する'))
    })

    //handleTodoSaveが呼ばれていないことを確認
    expect(handleRewardSave).toHaveBeenCalledTimes(0)
  })

})