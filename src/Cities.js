import React from "react"
import Header from "./Headers/Header.js"
import ClickableMap from "./ClickableMap"
import notVisitedMarkerIcon from "./images/notVisited-marker-icon.png"
import pendingMarkerIcon from "./images/pending-marker-icon.png"
import readyMarkerIcon from "./images/ready-marker-icon.png"
import ExplainHeader from "./Headers/ExplainHeader"

import insta2 from "./images/insta2.mp4"
import insta3 from "./images/insta3.mp4"
import insta4 from "./images/insta4.mp4"
import insta5 from "./images/insta5.mp4"
import insta6 from "./images/insta6.mp4"
import insta7 from "./images/insta7.mp4"
import insta8 from "./images/insta8.mp4"

export default function Cities(props) {
  return (
    <div>
      <Header />
      <ExplainHeader />
      <div
        style={{
          position: "absolute",
          zIndex: 9999,
          right: "1.7%",
          backgroundColor: "rgba(255,255,255,0.8)",
          boxShadow: "0 0 15px rgba(0,0,0,0.2)",
          borderRadius: 5,
          marginTop: 10,
          padding: "5px",
        }}
      >
        <div style={{ display: "flex", fontSize: 15 }}>
          <img
            src={readyMarkerIcon}
            alt="Visited Icon"
            style={{ height: 20, width: 12 }}
          />
          &nbsp; Article Done
        </div>
        <div style={{ display: "flex", fontSize: 15 }}>
          <img
            src={pendingMarkerIcon}
            alt="Visited Icon"
            style={{ height: 20, width: 12 }}
          />
          &nbsp; Visited
        </div>
        <div style={{ display: "flex", fontSize: 15 }}>
          <img
            src={notVisitedMarkerIcon}
            alt="Visited Icon"
            style={{ height: 20, width: 12 }}
          />
          &nbsp; Never been
        </div>
      </div>
      <ClickableMap />
      <div
        style={{
          textAlign: "center",
          marginTop: "15px",
          fontFamily: "Permanent Marker",
          fontSize: "40px",
          color: "black",
          
        }}
      >
        Clips from the road
      </div>
      <div >
        <video width="400" height="320" style={{marginRight: "20px", marginLeft:"10px"}} controls>
          <source src={insta4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video width="400" height="320" style={{marginRight: "20px"}}  controls>
          <source src={insta2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video width="400" height="320" style={{marginRight: "20px"}} controls>
          <source src={insta3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

       
      </div>
      
      </div>
    
  )
}
