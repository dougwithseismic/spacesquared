import { useState, useRef, useEffect } from 'react'
import ReactMapGL, { Marker, GeolocateControl, Layer } from 'react-map-gl'

export default function Map({ locations }) {
  const targetRef = useRef()
  const [
    userLocation,
    setUserLocation
  ] = useState({ latitude: 50.0755, longitude: 14.4378 })


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

  const parkLayer = {
    id: 'landuse_park',
    type: 'fill',
    source: 'mapbox',
    'source-layer': 'landuse',
    filter: [
      '==',
      'class',
      'park'
    ]
  }

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
        }}
        GeolocateControl
      >
        <Marker latitude={userLocation.latitude} longitude={userLocation.longitude} offsetLeft={-20} offsetTop={-10}>
          <div className="mark" style={{ padding: '1em', backgroundColor: 'white' }}>
            You are here
          </div>
        </Marker>
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          style={{ position: 'absolute', padding: '1em', right: 0 }}
          onViewportChange={(nextViewport) => {
            setUserLocation(nextViewport)
            setViewport({...nextViewport, zoom: 16, pitch: 30})
          }}
        />
        <Layer {...parkLayer} paint={{ 'fill-color': '#dea' }} />
      </ReactMapGL>
    </div>
  )
}
