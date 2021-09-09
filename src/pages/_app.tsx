import GlobalStyle from '../styles/GlobalStyle';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Felipe de Alcântara Monteiro</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>  
  )
}
