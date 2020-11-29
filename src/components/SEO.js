import Head from 'next/head'
import siteDetail from '../settings'

const SEO = ({ title, children }) => {
  return (
    <Head>
      <title>
        {title} - {siteDetail.siteName}
      </title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css" rel="stylesheet" />
      {children}
    </Head>
  )
}

export default SEO
