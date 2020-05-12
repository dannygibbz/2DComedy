import React from "react"
import Header from "./Headers/Header.js"
import tinaTurner from "./images/tina-turner.jpg"
import { withRouter } from "react-router"
// function NoMatchWeb(props) {
//   return (
//     <div style={{ display: "flex", justifyContent: "space-between", marginTop: "30px" }}>
//       Nothing here web
//     </div>
//   )
// }

// function NoMatchMobile(props) {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         flexDirection: "column",
//         marginTop: "30px",
//       }}
//     >
//       Nothing here mobile.
//     </div>
//   )
// }

class NoMatch extends React.Component {
  state = { isMobile: window.innerWidth < 768 }

  updateDimensions = () => {
    if (window.innerWidth < 768) {
      this.setState({ isMobile: true })
    } else {
      this.setState({ isMobile: false })
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
  }
  render() {
    return (
      <div>
        <Header />
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <h2 className="header" style={{ fontSize: "45px", marginTop: "20px" }}>
            404,&nbsp;bud
          </h2>
        </div>
        <div style={{ marginRight: "10%", marginLeft: "10%" }}>
          <h3
            className="copyText"
            style={{
              fontSize: "25px",
              margin: "auto",
              maxWidth: "700px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>Ain't nothing here, homeboy.</div>
            <div>But everyone makes mistakes.</div>
            <div>Even this carpenter.</div>
            <a
              href="https://www.instagram.com/p/BvCdL9Nn8z2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={tinaTurner}
                style={{ cursor: "pointer" }}
                width={300}
                alt="Saw this halfway between Nashville and Memphis and I haven't been able to sleep since"
              />
            </a>
          </h3>
        </div>
      </div>
    )
  }
}

export default withRouter(NoMatch)
