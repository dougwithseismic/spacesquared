import React, { createContext, useState } from 'react'

// Describe Context.
/* 
Features:

*/

const defaultState = {
  selectedEvent: null
}

const SiteContext = createContext(defaultState)

const SiteProvider = (props) => {
  const { children } = props

  const [
    selectedEvent,
    setSelectedEvent
  ] = useState(null)

  return (
    <SiteContext.Provider
      value={{
        selectedEvent,
        setSelectedEvent,
        test: () => {
          console.log('test')
        }
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}

export default SiteContext
export { SiteProvider }
