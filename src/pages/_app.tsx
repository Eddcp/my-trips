import { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <DefaultSeo {...SEO} />
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
