import React, { useState, useContext, useEffect } from 'react'
import style from './eventOverlay.module.scss'

import SiteContext from '../../context/siteContext'

const EventOverlay = () => {
  const { selectedEvent } = useContext(SiteContext)

  useEffect(
    () => {
      console.log('selectedEvent', selectedEvent)
    },
    [
      selectedEvent
    ]
  )

  const [
    isOpen,
    setIsOpen
  ] = useState(false)

  return (
    <div className={`${style.eventOverlay}`} onClick={() => setIsOpen(!isOpen)}>
      <h1>Event name</h1>
      <div className="event-details">
        <span className="event-time">Opens in two hours</span>
        <span className="event-location">Výstaviště Praha Holešovice</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque commodi, cumque, provident in temporibus
        facere repellendus magni, quisquam voluptatum error magnam ea alias unde recusandae. Deleniti quasi ipsum qui!
      </p>
      I'm an event overlayaaa
    </div>
  )
}

export default EventOverlay
