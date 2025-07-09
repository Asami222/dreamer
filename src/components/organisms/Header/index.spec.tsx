import { render, RenderResult, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'themes';
import { AuthContextProvider } from 'contexts/AuthContext';
import type { User } from 'types/data';
import Header from '.';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    refresh: jest.fn(),
    push: jest.fn(),
  }),
}))

//ダミーユーザー
const authUser: User = {
  id: 1,
  username: "nanami",
  password: "7000",
  profileImageUrl: "/images/flower1.webp",
  numberOfStars: 20,
  dream: "医者",
  limit: "2026年",
  displayName: "apple",
}

describe('Header', () => {
  let renderResult: RenderResult

   // fetchモックを追加
  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            id: 1,
            username: 'nanami',
            profileImageUrl: '/users/1.png',
          }),
      })
    ) as jest.Mock
  })

  afterAll(() => {
    // モックをクリア
    jest.resetAllMocks()
  })


  it('サインイン', async () => {
    renderResult = render(
      <ThemeProvider theme={theme}>
        <AuthContextProvider authUser={authUser} context={{apiRootUrl: 'https://dummy'}}>
          <Header />
        </AuthContextProvider>
      </ThemeProvider>
    )

    //サインインしている
    expect(screen.queryByTestId('profile-noimage')).toBeNull()

    renderResult.unmount()
  })
  
  it('未サインイン', async () => {
    renderResult = render(
      <ThemeProvider theme={theme}>
        <AuthContextProvider context={{apiRootUrl: 'https://dummy'}}>
          <Header />
        </AuthContextProvider>
      </ThemeProvider>
    )

    //サインインしていない
    expect(screen.queryByTestId('profile-image')).toBeNull()

    renderResult.unmount()
  })
})