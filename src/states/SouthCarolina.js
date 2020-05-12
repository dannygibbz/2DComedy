import React from "react"
import Header from "./Header"
import { SubHeader, MainHeader } from "./SubHeader"
import MyMap from "./MyGoogleMap"
import { Link } from "react-router-dom"
export default function SouthCarolina(props) {
  return (
    <div>
      <Header />
      <div style={{ margin: 20 }}>
        <MainHeader>South Carolina</MainHeader>

        <div>South Carolina: Land of the great</div>

        <div>There are two major cities in South Carolina: Columbia, Charleston</div>
        <SubHeader>
          Columbia{" "}
          <a href="https://www.facebook.com/Louisville-Is-Funny-143098729806767/">
            Open Mics{" "}
          </a>
        </SubHeader>
        <div style={{ display: "flex", minHeight: "500px" }}>
          <div style={{ width: "50%" }}>Here are thoughts</div>
          <div style={{ width: "50%" }}>
            <MyMap address={"Columbia,SC"} style={{ width: 400, height: 400 }} />
          </div>
        </div>
        <SubHeader>
          Charleston{" "}
          <a href="https://www.facebook.com/groups/charlestoncomedy/about/">Open Mics</a>
        </SubHeader>
        <div style={{ display: "flex", minHeight: "500px" }}>
          <div style={{ width: "50%" }}>Here are thoughts</div>
          <div style={{ width: "50%" }}>
            <MyMap address={"Charleston,SC"} style={{ width: 400, height: 400 }} />
          </div>
        </div>

        <SubHeader>
          Asheville{" "}
          <a href="https://www.facebook.com/groups/ashevillecomedy/events/">Open Mics</a>
        </SubHeader>
        <div style={{ display: "flex", minHeight: "500px" }}>
          <div style={{ width: "50%" }}>Here are thoughts</div>
          <div style={{ width: "50%" }}>
            <MyMap address={"Asheville,NC"} style={{ width: 400, height: 400 }} />
          </div>
        </div>
      </div>
    </div>
  )
}
