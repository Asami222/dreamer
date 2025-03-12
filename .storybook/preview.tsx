import { Roboto, M_PLUS_1p } from 'next/font/google';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from '../src/themes'
import React from "react";
//import * as NextImage from 'next/image'
//import { ImageProps } from 'next/image'

const roboto = Roboto({
  weight: ['300','400','500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const m_plus_1p = M_PLUS_1p({
  weight: ['400','500'],
  subsets: ['latin'],
  variable: '--font-m-plus-1p',
  display: 'swap',
})


export const parameters = {
  backgrounds: {
    default: 'button',
    values: [
      { name: 'button', value: '#E2B3B0' },
    ],
  },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
}

export const GlobalStyle = createGlobalStyle`
html,
body,
textarea {
  padding: 0;
  margin: 0;
  font-family: var(${roboto.variable}), var(${m_plus_1p.variable}), sans-serif;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
  transition: .25s;
  color: #000;
}
`;

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className={["base", roboto.variable, m_plus_1p.variable].join(" ")}>
      <Story />
      </div>
    </ThemeProvider>
    ),
];
/*
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props: ImageProps) => { return typeof props.src === 'string' ? 
    (
    <OriginalNextImage {...props} unoptimized blurDataURL={props.src}/>
  ) : (
    <OriginalNextImage {...props} unoptimized/>
  )
},

})
*/

