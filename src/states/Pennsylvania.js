import React from "react"
import Header from "./Header"
import { SubHeader, MainHeader } from "./SubHeader"
import MyMap from "./MyGoogleMap"
import { Link } from "react-router-dom"
export default function Pennsylvania(props) {
  return (
    <div>
      <Header />
      <div style={{ margin: 20 }}>
        <MainHeader>Pennsylvania</MainHeader>

        <div>Pennsylvania: Land of the great</div>

        <div>
          There are two major cities in Pennsylvania: Philadelphia, and Pittsburgh
        </div>
        <SubHeader>
          Philadelphia{" "}
          <a href="https://lookaside.fbsbx.com/file/Philly%20Standup%20Open%20Mic%20Schedule%20July%202018.pdf?token=AWxvRQ-KdGrVOR72OvDYzpbfkxqLDomqYw7mAOGfj4Ky2nfAiCwEWXI25yC1Rnzn5SjoBjt3uPggiK0JavK5P10yhy9LaqJ9ZoSP4fBODpazPFwKv5rE17AzxDcU_8Ycibh2Pxi2mmQDpKZS19qcF2oDK8N2WP8CZquar3k3Xjg9Vg">
            Open Mics
          </a>
        </SubHeader>
        <div style={{ display: "flex", minHeight: "500px" }}>
          <div style={{ width: "50%" }}>Here are thoughts</div>
          <div style={{ width: "50%" }}>
            <MyMap address={"Philadelphia,PA"} style={{ width: 400, height: 400 }} />
          </div>
        </div>
        <SubHeader>
          Pittsburgh{" "}
          <a href="https://calendar.google.com/calendar/embed?src=1jgm4ian3f9q94advlfna322j0%40group.calendar.google.com&ctz=America/New_York">
            Open Mics
          </a>
        </SubHeader>
        <div style={{ display: "flex", minHeight: "500px" }}>
          <div style={{ width: "50%" }}>Here are thoughts</div>
          <div style={{ width: "50%" }}>
            <MyMap address={"Pittsburgh,PA"} style={{ width: 400, height: 400 }} />
          </div>
        </div>
      </div>
    </div>
  )
}

/*

        */
