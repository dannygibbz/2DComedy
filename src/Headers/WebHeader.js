import React from "react"
import Dcresc from "../images/Dcresc.png"
import DGibbs from "../images/DGibbs.png"
import { withRouter } from "react-router-dom"
import "./Header.css"
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"

function WebHeader(props) {
  let history = props.history
  let path = props.location.pathname
  let normalStyle = { fontSize: "22px", cursor: "pointer" }
  let highlightedStyle = {
    fontSize: "22px",
    cursor: "pointer",
    borderBottom: "1px solid #f0353d",
  }
  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          backgroundColor: "rgb(25, 28, 28)",
          height: "150px",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <div style={{ paddingLeft: "30px" }}>
              <a
                href="https://instagram.com/2dcomedy"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginRight: "20px",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  size={40}
                  style={{
                    cursor: "pointer",
                    background:
                      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
                    borderRadius: "10px",
                  }}
                />
              </a>
              <a
                href="https://twitter.com/dannygibbz"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginRight: "20px",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter
                  size={40}
                  style={{
                    cursor: "pointer",
                    color: "white",
                    background: "#38A1F3",
                    padding: "2px",
                    borderRadius: "10px",
                  }}
                />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100014361060526"
                style={{
                  textDecoration: "none",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook
                  size={40}
                  style={{
                    cursor: "pointer",
                    color: "#3C5A99",
                    backgroundColor: "white",
                  }}
                />
              </a>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div
              style={
                path === "/"
                  ? Object.assign({}, highlightedStyle)
                  : Object.assign({}, normalStyle)
              }
              className="hoverRed"
              onClick={() => history.push("/")}
            >
              Cities
            </div>
            <img
              src={Dcresc}
              height={140}
              alt={"Dan Crescimanno"}
              style={{ marginTop: "13px", marginRight: "-40px", cursor: "pointer" }}
              onClick={() => history.push("/")}
            />
            <img
              src={DGibbs}
              height={140}
              alt={"Dan Gibbons"}
              style={{ marginTop: "13px", cursor: "pointer" }}
              onClick={() => history.push("/")}
            />
            <div
              style={
                path === "/contact"
                  ? Object.assign({ marginRight: "26px" }, highlightedStyle)
                  : Object.assign({ marginRight: "26px" }, normalStyle)
              }
              className="hoverRed"
              onClick={() => history.push("/contact")}
            >
              Contact
            </div>
            {/*
            <div
              style={
                path === "/about"
                  ? Object.assign({ marginRight: "26px" }, highlightedStyle)
                  : Object.assign({ marginRight: "26px" }, normalStyle)
              }
              className="hoverRed"
              onClick={() => history.push("/about")}
            >
              About
            </div>*/}
          </div>
          <div style={{ flex: 1 }} />
        </div>
      </header>
    </div>
  )
}

export default withRouter(WebHeader)
