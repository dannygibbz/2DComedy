import React from "react"
import { withRouter } from "react-router-dom"
import BackButtonPic from "./images/back-button.svg"

function BackButton(props) {
  return (
    <div style={{ marginLeft: "5%", marginBottom: "10px", cursor: "pointer" }}>
      <img
        src={BackButtonPic}
        width={"30px"}
        onClick={() => props.history.push("/")}
        alt="Back Button"
      />
    </div>
  )
}

export default withRouter(BackButton)
