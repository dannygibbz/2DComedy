import React from "react"
import "./Header.css"
import { withRouter } from "react-router"

function SkinnyHeader(props) {
  return (
    <header
      className="App-header"
      style={{
        backgroundColor: "rgb(25, 28, 28)",
        height: "20px",
        color: "white",
      }}
    >
      {/*
      <div
        style={{
          position: "absolute",
          top: -18,
          left: "3%",
          fontSize: "38px",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => props.history.push("/")}
      >
        &larr; <span style={{ fontSize: "18px", top: -10 }}>Back</span>
      </div>*/}
    </header>
  )
}

export default withRouter(SkinnyHeader)
