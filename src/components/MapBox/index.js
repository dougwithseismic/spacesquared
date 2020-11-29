import { useState, useRef, useContext, useEffect } from 'react'
import ReactMapboxGl, { Layer, Feature, MapContext, ZoomControl } from 'react-mapbox-gl'
import { GeolocateControl } from 'mapbox-gl'

import SiteContext from '../../context/siteContext'

const Map = ReactMapboxGl({
  accessToken: process.env.MAPBOX_KEY
})

export default function Map({ locations }) {
  const [
    viewport,
    setViewport
  ] = useState({
    latitude: 50.0755,
    longitude: 14.4378,
    zoom: [
      15
    ],
    pitch: [
      40
    ]
  })

  const [
    userLocation,
    setUserLocation
  ] = useState({})

  // GeoLocate
  const geolocate = new GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    fitBoundsOptions: { maxZoom: 20 },
    trackUserLocation: true
  })

  useEffect(() => {
    // When a geolocate happens, let's share
    geolocate.on('geolocate', (event) => {
      console.log('A geolocate event has occurred.', event)
      setUserLocation({ coords: event.coords })
    })
  }, [])

  return (
    <div className="w-screen h-screen">
      <Map
        style="mapbox://styles/mapbox/streets-v11"
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}
        center={[
          viewport.longitude,
          viewport.latitude
        ]}
        {...viewport}
      >
        <MapContext.Consumer>
          {(map) => {
            map.addControl(geolocate)
          }}
        </MapContext.Consumer>
        <ZoomControl position="bottom-right" />
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature
            coordinates={[
              viewport.longitude,
              viewport.latitude
            ]}
          />
        </Layer>
      </Map>
    </div>
  )
}
