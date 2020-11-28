import Head from 'next/head'
import SEO from '../components/SEO'

import { useEffect, useState } from 'react'

import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'

const MapBox = dynamic(() => import('../components/MapBox'), {
  loading: () => 'Loading...',
  ssr: false
})

/*

TODO:

MapBox -  Show Prague.
Scrape GoOut (fake it for now?)
Add events tags from GoOut


*/

const url = `https://api.mapbox.com/geocoding/v5/
mapbox.places/greggs.json?access_token=${process.env.MAPBOX_KEY}
&bbox=-0.227654%2C51.464102%2C0.060737%2C51.553421&limit=10`

export default function Home() {
  const [
    locations,
    setLocations
  ] = useState([])

  useEffect(() => {
    const fetchLocations = async () => {
      await fetch(url)
        .then((response) => response.text())
        .then((res) => JSON.parse(res))
        .then((json) => {
          setLocations(json.features)
          console.log('locations', json.features)
        })
        .catch((err) => console.log({ err }))
    }
    fetchLocations()
  }, [])

  return (
    <div className={styles.container}>
      <SEO title="Home" />

      <MapBox locations={locations} />
    </div>
  )
}
