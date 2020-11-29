import { useState, useRef, useContext } from 'react'
import ReactMapboxGl, { Layer, Feature, MapContext } from 'react-mapbox-gl'
import { GeolocateControl } from 'mapbox-gl'

import SiteContext from '../../context/siteContext'

export default function Map({ locations }) {
  const { setSelectedEvent } = useContext(SiteContext)

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

  const Map = ReactMapboxGl({
    accessToken: process.env.MAPBOX_KEY
  })

  return (
    <div className="w-screen h-screen" ref={targetRef}>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}
        center={[
          viewport.longitude,
          viewport.latitude
        ]}
      >
        <MapContext.Consumer>
          {(map) => {
            map.addControl(new GeolocateControl())
          }}
        </MapContext.Consumer>
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
