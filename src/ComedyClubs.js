/* Find all the comedy clubs */
import React from "react"
import Header from "./Headers/Header"
import ReactTable from "react-table"
import { InputNumber, Button } from "antd"
import "react-table/react-table.css"
import axios from "axios"
import { Map as LeafletMap, TileLayer, Marker, Tooltip } from "react-leaflet"
/*
Things that I need
1. Name
2. Lat,lng (or location)
3. Website
4. Phone number
*/

class DisplayList extends React.Component {
  state = {
    lat: null,
    long: null,
    results: [],
    loading: false,
    gotData: false,
  }

  submit = async () => {
    const { lat, long } = this.state
    this.setState({ loading: true })

    if (lat === null || long === null) {
      alert("Need to set latitude and longitude")
      this.setState({ loading: false })
      return
    }

    let response = await axios.post("/.netlify/functions/searchNearbyPlaces", {
      lat,
      long,
    })

    this.setState({ results: response.data, gotData: true, loading: false })
  }

  render() {
    console.log(this.state.results)
    return (
      <div>
        <Header />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              color: "black",
              fontFamily: "Nobile, sans-serif",
              fontSize: "6vw",
              textAlign: "center",
            }}
          >
            Comedy Search
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <InputNumber
            style={{ maxWidth: "100px", marginRight: "5px" }}
            placeholder="latitude"
            value={this.state.lat}
            onChange={(val) => this.setState({ lat: val })}
          />
          <InputNumber
            style={{ maxWidth: "100px", marginRight: "5px" }}
            placeholder="longitude"
            value={this.state.long}
            onChange={(val) => this.setState({ long: val })}
          />

          <Button
            type="default"
            style={{ backgroundColor: "#4B6EDA", color: "#FFFFFF" }}
            onClick={this.submit}
            loading={this.state.loading}
          >
            Submit
          </Button>
        </div>
        <div
          style={{
            width: "90%",
            marginLeft: "50px",
            marginBottom: "50px",
            marginTop: "50px",
          }}
        >
          {this.state.gotData && (
            <div>
              {this.state.lat && this.state.long && (
                <LeafletMap
                  center={[this.state.lat, this.state.long]}
                  zoom={6}
                  zoomSnap={0.5}
                  attributionControl={false}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution=""
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                  />
                  {this.state.results.map((el) => {
                    return (
                      <Marker
                        key={el.name}
                        name={el.name}
                        position={[el.geometry.location.lat, el.geometry.location.lng]}
                        onClick={() => {
                          if (el.website) {
                            window.open(el.website, "_blank")
                          }
                        }}
                      >
                        <Tooltip>
                          <div style={{ fontSize: "14px" }}>{el.name}</div>
                          <div style={{ fontSize: "14px" }}>{el.website}</div>
                          <div style={{ fontSize: "14px" }}>
                            {el.formatted_phone_number}
                          </div>
                        </Tooltip>
                      </Marker>
                    )
                  })}
                </LeafletMap>
              )}
              <ReactTable
                data={this.state.results}
                showPagination={false}
                defaultPageSize={this.state.results.length}
                columns={[
                  { Header: "Name", accessor: "name" },
                  {
                    Header: "website",
                    accessor: "website",
                    Cell: (row) => (
                      <a href={row.value} target="_blank" rel="noopener noreferrer">
                        {row.value}
                      </a>
                    ),
                  },
                  { Header: "Phone Number", accessor: "formatted_phone_number" },
                  { Header: "Address", accessor: "formatted_address" },
                ]}
              />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default DisplayList
