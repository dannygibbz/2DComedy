import React from "react"
import Dcresc from "../images/Dcresc.png"
import DGibbs from "../images/DGibbs.png"
import { withRouter } from "react-router-dom"
import "./Header.css"
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"

function MobileHeader(props) {
  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          backgroundColor: "rgb(25, 28, 28)",
          height: "120px",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img
            src={Dcresc}
            height={100}
            alt={"Dan Crescimanno"}
            style={{ marginTop: "13px" }}
          />
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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

          <img
            src={DGibbs}
            height={100}
            alt={"Dean Gadbrooks"}
            style={{ marginTop: "13px" }}
          />
        </div>
      </header>
    </div>
  )
}

export default withRouter(MobileHeader)
