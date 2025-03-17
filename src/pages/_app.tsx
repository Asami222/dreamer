import { Roboto, M_PLUS_1p } from 'next/font/google';
import type { AppProps } from "next/app";
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import GlobalSpinner from 'components/organisms/GlobalSpinner'
import { AuthContextProvider, useAuthContext } from 'contexts/AuthContext'
import GlobalSpinnerContextProvider from 'contexts/GlobalSpinnerContext'
import { SWRConfig } from 'swr'
import type { ApiContext } from 'types/data'
import { fetcher } from 'utils'
import { theme } from 'themes';
import TotalStarContextProvider from 'contexts/TotalStarContext';
import { MyTodosContextProvider } from 'contexts/TodoContext';
import { MyRewardsContextProvider } from 'contexts/RewardContext';
import { GotRewardContextProvider } from 'contexts/GotRewardContext';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_NAME, SITE_IMAGE, SITE_IMAGE_WIDTH, SITE_IMAGE_HEIGHT } from 'lib/site-meta';

export const roboto = Roboto({
  weight: ['300','400','500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  preload: false
});

export const m_plus_1p = M_PLUS_1p({
  weight: ['400','500','700'],
  subsets: ['latin'],
  variable: '--font-m-plus-1p',
  display: 'swap',
  preload: false
})

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
        <title key="title">{SITE_TITLE}</title>
        <meta name="title" content={SITE_TITLE} key="meta:title" />
        <meta name="description" content={SITE_DESCRIPTION} key="meta:description" />
        <meta property="og:title" content={SITE_TITLE} key="meta:og:title" />
        <meta property="og:description" content={SITE_DESCRIPTION} key="meta:og:description" />
        <meta property="og:image" content={SITE_IMAGE} key="meta:og:image" />
        <meta property="og:image:width" content={SITE_IMAGE_WIDTH} />
        <meta property="og:image:height" content={SITE_IMAGE_HEIGHT} />
        <meta property="og:site_name" content={SITE_NAME} /> 
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel='icon' href='/images/favicon.ico' />
        <link rel='apple-touch-icon' href='/images/apple-touch-icon.png' />
        {/* <meta property="fb:app_id" content="556485011968079" />
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
