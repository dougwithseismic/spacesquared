import Head from 'next/head'
import siteDetail from '../settings'

const SEO = ({ title, children }) => {
  return (
    <Head>
      <title>
        {title} - {siteDetail.siteName}
      </title>
      <link rel="icon" href="/favicon.ico" />
      {children}
    </Head>
  )
}

export default SEO
