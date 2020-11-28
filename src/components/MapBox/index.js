import { useState, useRef, useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'

export default function Map({ locations }) {
  const targetRef = useRef()
  const [
    selectLocation,
    setSelectedLocation
  ] = useState({})

  const [
    dimensions,
    setDimensions
  ] = useState({
    width: 100,
    height: 100
  })

  const [
    viewport,
    setViewport
  ] = useState({
    // The latitude and longitude of the center of London
    latitude: 50.0755,
    longitude: 14.4378,
    zoom: 13,
    pitch: 40
  })

  return (
    <div className="w-screen h-screen" ref={targetRef}>
      <ReactMapGL
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/dougwithseismic/ck99v4cr70p831imouulah651"
        mapboxApiAccessToken={process.env.MAPBOX_KEY}
        {...viewport}
        onViewportChange={(nextViewport) => {
          setViewport(nextViewport)
          console.log(nextViewport)
        }}
      />
    </div>
  )
}
