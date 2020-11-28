import { useState, useRef, useEffect } from 'react'
import ReactMapGL, { Marker, GeolocateControl  } from 'react-map-gl'

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
    zoom: 14,
    pitch: 40
  })

  return (
    <div className="w-screen h-screen" ref={targetRef}>
      <ReactMapGL
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/dougwithseismic/cki1n30yt35b919mj4n6ksqv7"
      
        mapboxApiAccessToken={process.env.MAPBOX_KEY}
        {...viewport}
        onViewportChange={(nextViewport) => {
          setViewport(nextViewport)
          console.log(nextViewport)
        }}
        GeolocateControl
      >
        <Marker latitude={50.0755} longitude={14.4378} offsetLeft={-20} offsetTop={-10}>
          <div className="mark">You are here</div>
        </Marker>
        <GeolocateControl 
        positionOptions={{ enableHighAccuracy: true }} 
        trackUserLocation={true}
        style={{ position: 'absolute', padding: '1em', right: 0}}
         />
      </ReactMapGL>
    </div>
  )
}
