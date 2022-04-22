import { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My trips</title>
        {/* <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" /> */}
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <meta
          name="description"
          content="A Simple project to show the places that I've already visited in this big world"
        />
      </Head>
      <GlobalStyles />
      <NextNProgress
        color="#ff0043"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  )
}

export default App
