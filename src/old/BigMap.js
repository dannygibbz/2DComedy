import React, { Component } from "react"
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polyline } from "google-maps-react"
import { USCities as cities, sortOrder } from "./cities"

function distance_on_earth(lat1, long1, lat2, long2, radius = 6378.388) {
  /*
  Compute distance between two points on earth specified by latitude/longitude.
  The earth is assumed to be a perfect sphere of given radius. The radius defaults
  to 6378.388 kilometers. To convert to miles, divide by 1.60934
  
  Reference
  ---------
  Adopted from John D. Cook's blog post: 
  http://www.johndcook.com/blog/python_longitude_latitude/
  */
  // Convert latitude and longitude to spherical coordinates in radians.
  let degrees_to_radians = Math.PI / 180.0
  // console.log(degrees_to_radians)
  // phi = 90 - latitude
  let phi1 = (90.0 - lat1) * degrees_to_radians
  let phi2 = (90.0 - lat2) * degrees_to_radians
  // console.log(phi1, phi2)
  // theta = longitude
  let theta1 = long1 * degrees_to_radians
  let theta2 = long2 * degrees_to_radians
  // console.log(theta1, theta2)
  // Compute spherical distance from spherical coordinates.
  let cos = Math.sin(phi1) * Math.sin(phi2) * Math.cos(theta1 - theta2) + Math.cos(phi1) * Math.cos(phi2)
  let arc = Math.acos(cos)
  let rv = arc * radius
  // console.log(cos, arc, rv)
  return rv
}

class MapContainer extends Component {
  state = {
    lat: 0,
    lng: 0,
    places: [],

    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false,

    moreInfo: {},
  }
  onMarkerClick = (props, marker, el) => {
    let { google, map } = props
    console.log(props, marker, el, google, map)
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true,
    })
  }

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false,
    })

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false,
      })
  }

  fetchAddress = (mapProps, map) => {
    let { google } = mapProps
    console.log(google)
    let geocoder = new google.maps.Geocoder()
    geocoder.geocode({ address: "Lebanon,KS" }, (results, status) => {
      if (status === "OK") {
        let location = results[0].geometry.location
        this.setState({ lat: location.lat(), lng: location.lng() })
      }
    })
  }

  componentDidMount() {
    // let { google } = this.props
    // console.log(google)
    // let geocoder = new google.maps.Geocoder()
    // for (let i = 10; i < cities.length; i++) {
    //   let city = cities[i]
    //   geocoder.geocode({ address: city.name }, (results, status) => {
    //     if (status === "OK") {
    //       let location = results[0].geometry.location
    //       console.log(`{ name: '${city.name}', lat: ${location.lat()}, lng: ${location.lng()} }`)
    //       // this.setState({ lat: location.lat(), lng: location.lng() })
    //     }
    //   })
    // }
  }

  render() {
    let place = this.state.selectedPlace
    let moreInfo = this.state.moreInfo
    let sortedCities = []
    for (let i = 0; i < sortOrder.length; i++) {
      let curOrder = sortOrder[i]
      sortedCities.push(cities[curOrder])
    }
    sortedCities.push(sortedCities[0])
    // cities.sort((a, b) => (a["sortOrder"] < b["sortOrder"] ? -1 : 1))
    console.log(sortedCities)
    let distances = []
    for (let i = 0; i < sortedCities.length - 1; i++) {
      let first = sortedCities[i]
      let second = sortedCities[i + 1]
      let distance = distance_on_earth(first["lat"], first["lng"], second["lat"], second["lng"]) / 1.60934
      distances.push(distance)
      console.log(distance, first, second)
    }
    let totalDistance = distances.reduce((a, b) => a + b, 0)
    let averageDistance = totalDistance / distances.length
    let smallest = Math.min(...distances)
    let biggest = Math.max(...distances)
    console.log(totalDistance, averageDistance, smallest, biggest)

    return (
      <Map
        google={this.props.google}
        zoom={4}
        style={this.props.style}
        onReady={this.fetchAddress}
        center={{
          lat: this.state.lat,
          lng: this.state.lng,
        }}
      >
        {cities.map((el) => (
          <Marker
            key={el.name}
            name={el.name}
            onClick={(props, marker) => this.onMarkerClick(props, marker, el)}
            position={{ lat: el.lat, lng: el.lng }}
          />
        ))}
        <Polyline fillColor="#0000FF" fillOpacity={0.35} path={sortedCities} strokeColor="#0000FF" strokeOpacity={0.8} strokeWeight={2} />
        <InfoWindow marker={this.state.activeMarker} onClose={this.onInfoWindowClose} visible={this.state.showingInfoWindow}>
          <div>
            <div>{place.name}</div>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCvm3inqdmdP4gYxR3d22RZG4IIXSR3F80",
})(MapContainer)
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
// import $ from "jquery"

// const MyGoogleMap = withScriptjs(
//   withGoogleMap((props) => (
//     <GoogleMap defaultZoom={8} defaultCenter={{ lat: props.lat, lng: props.lng }}>
//       {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lng }} />}
//     </GoogleMap>
//   ))
// )

// class MyMap extends React.Component {
//   state = { lat: 0, lng: 0 }

//   componentDidMount() {
//     $.get(
//       `https://maps.googleapis.com/maps/api/geocode/json?address=${this.props.address}&key=AIzaSyCvm3inqdmdP4gYxR3d22RZG4IIXSR3F80`,
//       (data, code) => {
//         let val = data.results[0].geometry.location
//         this.setState({ lat: val.lat, lng: val.lng })
//       }
//     )
//   }
//   render() {
//     if (!this.state.lat) {
//       return <div style={{ height: `100%` }} />
//     }
//     return (
//       <MyGoogleMap
//         isMarkerShown
//         googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCvm3inqdmdP4gYxR3d22RZG4IIXSR3F80&v=3.exp&libraries=geometry,drawing,places"
//         lat={this.state.lat}
//         lng={this.state.lng}
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{ height: `400px` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//       />
//     )
//   }
// }

// class MyMap extends React.Component {

//   render() {
//     return <div id="map">Here we go</div>
//   }
// }

// export default MyMap
