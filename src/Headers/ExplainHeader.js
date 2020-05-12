import React from "react"
import { Link } from "react-router-dom"
// import VanLife from '../images/van-life.jpg'
import VanLife from "../images/closeCrop.jpg"
class ExplainHeader extends React.Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <img src={VanLife} style={{ width: "100%" }} alt={"Van life"} />
        <div
          style={{
            margin: "auto",
            maxWidth: "700px",
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
          }}
        >
          <h2 className="header" style={{ textAlign: "center", marginTop: "20px" }}>
            Two Dans in a Van
          </h2>
          <p className="copytext">
            Two comedians cruisin' the country to perform standup in all 50 states. Click
            the cities below for tales of comedy and the craziness of life on the road.
            Click <Link to="/about">here</Link> to read more about us.
          </p>
        </div>
      </div>
    )
  }
}

export default ExplainHeader
