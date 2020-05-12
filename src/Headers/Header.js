import React from "react"
import "./Header.css"
import WebHeader from "./WebHeader.js"
import MobileHeader from "./MobileHeader.js"
class Header extends React.Component {
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
    if (this.state.isMobile) {
      return <MobileHeader />
    }
    return <WebHeader />
  }
}

export default Header
