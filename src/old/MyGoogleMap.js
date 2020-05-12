import React, { Component } from "react"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"

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
    let service = new google.maps.places.PlacesService(map)
    service.getDetails({ placeId: el.place_id }, (place, status) => {
      console.log(place, status)
      this.setState({ moreInfo: place })
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
  fetchPlaces = (google, map) => {
    let service = new google.maps.places.PlacesService(map)
    service.nearbySearch(
      {
        location: { lat: this.state.lat, lng: this.state.lng },
        radius: 50000,
        keyword: "comedy",
      },
      (results, status) => {
        console.log(results, status)
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          this.setState({ places: results })
        }
      }
    )
  }

  fetchAddress = (mapProps, map) => {
    let { google } = mapProps
    console.log(google)
    let geocoder = new google.maps.Geocoder()
    geocoder.geocode({ address: this.props.address }, (results, status) => {
      if (status === "OK") {
        let location = results[0].geometry.location
        this.setState({ lat: location.lat(), lng: location.lng() }, () => this.fetchPlaces(google, map))
      }
    })
  }

  render() {
    let place = this.state.selectedPlace
    let moreInfo = this.state.moreInfo
    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={this.props.style ? this.props.style : { width: 400, height: 400 }}
        onReady={this.fetchAddress}
        center={{
          lat: this.state.lat,
          lng: this.state.lng,
        }}
      >
        {this.state.places.map((el) => (
          <Marker
            key={el.name}
            name={el.name}
            onClick={(props, marker) => this.onMarkerClick(props, marker, el)}
            position={{ lat: el.geometry.location.lat(), lng: el.geometry.location.lng() }}
          />
        ))}
        <InfoWindow marker={this.state.activeMarker} onClose={this.onInfoWindowClose} visible={this.state.showingInfoWindow}>
          <div>
            <div>{place.name}</div>
            <div>{moreInfo.formatted_address || ""}</div>
            <div>{moreInfo.formatted_phone_number || ""}</div>
            <a href={moreInfo.website || ""}>{moreInfo.website || ""}</a>
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
