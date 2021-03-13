import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';

import GlobalStyle from 'styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React - Boilerplate</title>

        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />

        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />

        <meta
          name="description"
          content="A simple project in TS, ReactJS, NextJS & Styled Components"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
