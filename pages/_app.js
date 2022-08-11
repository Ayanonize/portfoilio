import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Head>
        <link rel="shortcut icon" href="https://pbs.twimg.com/profile_images/1481905318942867457/J0ylsqPq_400x400.jpg" type="image/x-icon" />
      </Head>
    </>
  )
}

export default MyApp
