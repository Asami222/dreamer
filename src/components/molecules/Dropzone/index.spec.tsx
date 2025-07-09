import { render, fireEvent, RenderResult, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'themes';
import Dropzone from '.';

describe('Dropzone', () => {
  let renderResult: RenderResult
  let handleDrop: jest.Mock

  beforeEach(() => {
    handleDrop = jest.fn()
    renderResult = render(
      <ThemeProvider theme={theme}>
        <Dropzone onDrop={handleDrop} />
      </ThemeProvider>
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  it('ファイルがドロップされたらonDropが呼ばれる', async () => {
    //ファイルをドロップ
    const element = await screen.findByTestId('dropzone')
    fireEvent.drop(element, {
      dataTransfer: {
        files: [
          new File(['dummy'],'chucknorris.png', {type: 'image/png'}),
        ],
      },
    })

    //ファイルが入力されたか確認
    expect(handleDrop).toHaveBeenCalledTimes(1)
  })
})