import React from "react"
import { USCities as cities } from "./allCities.js"
import { Map as LeafletMap, TileLayer, Marker, Tooltip } from "react-leaflet"
import { withRouter } from "react-router"
import danVanIconUrl from "./images/danvan.png"
import readyMarkerIcon from "./images/ready-marker-icon.png"
import pendingMarkerIcon from "./images/pending-marker-icon.png"
import notVisitedMarkerIcon from "./images/notVisited-marker-icon.png"
import L from "leaflet"

function ClickableMap(props) {
  // van coordinates
  const vanLat = 39.9526
  const vanLng = -75.1652

  // Need these coordinates. They are the center of the tiled map
  const lat = 38.68717609999999
  const lng = -93.33005300000002
  const zoom = 4.5

  let { history } = props
  const danVan = L.icon({
    iconUrl: danVanIconUrl,
    iconSize: [45, 35],
  })

  const readyCityIcon = L.icon({
    iconUrl: readyMarkerIcon,
    iconSize: [25, 41],
  })

  const pendingCityIcon = L.icon({
    iconUrl: pendingMarkerIcon,
    iconSize: [25, 41],
  })

  const notVisitedCityIcon = L.icon({
    iconUrl: notVisitedMarkerIcon,
    iconSize: [25, 41],
  })

  const cityStateMapping = {
    ready: readyCityIcon,
    pending: pendingCityIcon,
    notVisited: notVisitedCityIcon,
  }

  return (
    <LeafletMap
      center={[lat, lng]}
      zoom={zoom}
      zoomSnap={0.5}
      attributionControl={false}
      scrollWheelZoom={false}
    >
      <TileLayer attribution="" url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      {cities.map((el) => {
        return (
          <Marker
            key={el.name}
            name={el.name}
            position={[el.lat, el.lng]}
            onClick={() => history.push(el.url)}
            icon={cityStateMapping[el.cityState]}
          >
            <Tooltip>
              <div style={{ fontSize: "14px" }}>{el.name}</div>
            </Tooltip>
          </Marker>
        )
      })}
      <Marker name="2DComedy" position={[vanLat, vanLng]} icon={danVan}>
        <Tooltip>
          <div style={{ fontSize: "14px" }}>2DComedy</div>
        </Tooltip>
      </Marker>
    </LeafletMap>
  )
}

export default withRouter(ClickableMap)
