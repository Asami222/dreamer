//import "@/styles/globals.css";
import { Roboto, M_PLUS_1p } from 'next/font/google';
import type { AppProps } from "next/app";
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import GlobalSpinner from 'components/organisms/GlobalSpinner'
import { AuthContextProvider, useAuthContext } from 'contexts/AuthContext'
import GlobalSpinnerContextProvider from 'contexts/GlobalSpinnerContext'
import { SWRConfig } from 'swr'
//import type { User } from 'types/data'
import type { ApiContext } from 'types/data'
import { fetcher } from 'utils'
import { theme } from 'themes';
import TotalStarContextProvider from 'contexts/TotalStarContext';
import { MyTodosContextProvider } from 'contexts/TodoContext';
import { MyRewardsContextProvider } from 'contexts/RewardContext';
import { GotRewardContextProvider } from 'contexts/GotRewardContext';

export const roboto = Roboto({
  weight: ['300','400','500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const m_plus_1p = M_PLUS_1p({
  weight: ['400','500','700'],
  subsets: ['latin'],
  variable: '--font-m-plus-1p',
  display: 'swap',
})
/*
const ephesis = Ephesis({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-ephesis',
  display: 'swap',
})
*/
const GlobalStyle = createGlobalStyle`
html,
body,
textarea {
  padding: 0;
  margin: 0;
}
body {
  background-color: ${theme.colors.primary};

  @media (min-width: 441px) {
    background-color: ${theme.colors.topPrimary};
  }
}
.base {
  font-family: var(--font-roboto), var(--font-m-plus-1p);
}
* {
  box-sizing: border-box;
}

a {
  cursor: pointer;
  text-decoration: none;
  transition: .25s;
  color: ${theme.colors.black};
}

ol, ul {
  list-style: none;
}

button, input, textarea {
  font-family : inherit;
}
`

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || '/api/proxy',
}


/*
const authUser: User = {
  id: 1,
  username: 'Taketo Yoshida',
  profileImageUrl: '/users/1.png',
  dream: '冒険家になることです',
  numberOfStars: 100,
}
*/
const MyApp = ({ Component, pageProps }: AppProps) => {

  const { authUser } = useAuthContext()
  
  return (
    <>
      <Head>
        <meta key="charset" name="charset" content="utf-8" />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5"
        />
        {/* <title key="title">{SITE_TITLE}</title>
        <meta name="title" content={SITE_TITLE} key="meta:title" />
        <meta name="description" content={SITE_DESCRIPTION} key="meta:description" />
        <meta property="og:title" content={SITE_TITLE} key="meta:og:title" />
        <meta property="og:description" content={SITE_DESCRIPTION} key="meta:og:description" />
        <meta property="og:image" content={`${publicRuntimeConfig.domainUrl}/static/images/icon/icon-512.png`} key="meta:og:image" />
        <meta property="og:site_name" content={SITE_NAME} /> */}
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="website" />
        {/* <meta property="fb:app_id" content="556485011968079" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@truck2hand" /> */}
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <SWRConfig
          value={{
            shouldRetryOnError: false,
            fetcher,
          }}
        >
          <GlobalSpinnerContextProvider>
            <TotalStarContextProvider>
              <GotRewardContextProvider>
                <MyRewardsContextProvider>
                  <MyTodosContextProvider>
                    <AuthContextProvider context={context} authUser={authUser}>
                      <GlobalSpinner />
                      <Component {...pageProps} />
                    </AuthContextProvider>
                  </MyTodosContextProvider>
                </MyRewardsContextProvider>
              </GotRewardContextProvider>
            </TotalStarContextProvider>
          </GlobalSpinnerContextProvider>
        </SWRConfig>
      </ThemeProvider>
    </>
  )
}

export default MyApp
