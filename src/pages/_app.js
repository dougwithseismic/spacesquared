import { Fragment } from 'react'
import { SiteProvider } from '../context/siteContext.js'

import '../styles/globals.css'
import '../styles/tailwind.scss'

// Hint: You can't pass a component directly as a child through the Provider - it expects a function!

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="square-main">
      <SiteProvider>
        <Component {...pageProps} />
      </SiteProvider>
    </div>
  )
}

export default MyApp
