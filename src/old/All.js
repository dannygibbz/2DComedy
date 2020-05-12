import React from "react"
import Header from "./Header"
import { MainHeader } from "./SubHeader"
import { USCities as cities } from "./cities"
import BigMap from "./BigMap"
import FileSaver from "file-saver"
export default class All extends React.Component {
  state = {
    page: 6,
  }

  createFile = () => {
    let lines = [
      "NAME : dream",
      "COMMENT : Stand Up",
      "TYPE : TSP",
      `DIMENSION : ${cities.length}`,
      "EDGE_WEIGHT_TYPE : GEOM",
      "NODE_COORD_SECTION",
    ]
    for (let i = 0; i < cities.length; i++) {
      lines.push(`${i} ${cities[i].lat} ${cities[i].lng}`)
    }
    let bigString = lines.join("\n")
    let blob = new Blob([bigString], { type: "text/plain;charset=utf-8" })
    FileSaver.saveAs(blob, "standup.txt")
  }

  render() {
    // let page = this.state.page
    return (
      <div>
        <Header />
        <div style={{ margin: 20 }}>
          <MainHeader>U.S.A</MainHeader>
          <button onClick={() => this.setState({ page: this.state.page + 1 })}>
            Next
          </button>
          <div>Everything: Land of the great</div>
          <button onClick={this.createFile}>Create Concorde File </button>
          <BigMap />

          {/*smallerCities.map((city) => (
            <div>
              <SubHeader>{city}</SubHeader>
              <div style={{ display: "flex", minHeight: "500px" }}>
                <div style={{ width: "50%" }}>Here are thoughts</div>
                <div style={{ width: "50%" }}>
                  <MyMap address={city} style={{ width: 400, height: 400 }} />
                </div>
              </div>
            </div>
          ))*/}
        </div>
      </div>
    )
  }
}
