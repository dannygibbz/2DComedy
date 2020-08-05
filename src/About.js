import React from "react"
import Header from "./Headers/Header.js"
import DanCresc from "./images/dancresc.jpg"
import DanGibbs from "./images/dangibbons.jpg"
import BackButton from "./BackButton"
function AboutWeb(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "30px",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: "45%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ textAlign: "center", fontSize: "23px" }}>
          Dan&nbsp;Gibbons
        </div>
        <img
          src={DanGibbs}
          alt="Dan Gibbons"
          style={{ display: "block", width: "100%", height: "auto" }}
        />
        <div style={{ margin: "10px" }}>
          Dan Gibbons is not a loud, jokey-joke guy. He's a guy if you sit close
          enough to hear, you double over laughing and everyone stares,
          confused.
        </div>
      </div>
      <div
        style={{
          width: "45%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ textAlign: "center", fontSize: "23px" }}>
          Dan&nbsp;Crescimanno
        </div>
        <img
          src={DanCresc}
          alt="Dan Crescimanno"
          style={{ display: "block", width: "100%", height: "auto" }}
        />
        <div style={{ margin: "10px" }}>
          Dan Crescimanno went to a nice school and studied math and computer
          science. Mom was happy about that. Then he started doing standup. Mom
          was less happy about that. Then he decided to get a van, and sleep in
          Walmart parking lots. Mom <b>hated</b> that. Luckily, college only
          cost $200k, so it all worked out in the end.
        </div>
      </div>
    </div>
  )
}

function AboutMobile(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "30px",
      }}
    >
      <div>
        <div style={{ textAlign: "center", fontSize: "23px" }}>
          Dean&nbsp;Gadbrooks
        </div>
        <img
          src={DanGibbs}
          alt="Dean Gadbrooks"
          style={{ display: "block", width: "100%", height: "auto" }}
        />
        <div style={{ margin: "10px" }}>
          Dean Gadbrooks is not a loud, jokey-joke guy. He's a guy if you sit close
          enough to hear, you double over laughing and everyone stares,
          confused.
        </div>
      </div>
      <div>
        <div style={{ textAlign: "center", fontSize: "23px" }}>
          Dan&nbsp;Crescimanno
        </div>
        <img
          src={DanCresc}
          alt="Dan Crescimanno"
          style={{ display: "block", width: "100%", height: "auto" }}
        />
        <div style={{ margin: "10px" }}>
          Dan Crescimanno went to a nice school and studied math and computer
          science. Mom was happy about that. Then he started doing standup. Mom
          was less happy about that. Then he decided to get a van, and sleep in
          Walmart parking lots. Mom <b>hated</b> that. Luckily, college only
          cost $200k, so it all worked out in the end.
        </div>
      </div>
    </div>
  )
}

class About extends React.Component {
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
        <div style={{ marginTop: "20px", marginLeft: "20px" }}>
          <BackButton />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 className="header" style={{ fontSize: "45px", marginTop: "5px" }}>
            About
          </h2>
        </div>

        <div style={{ marginRight: "10%", marginLeft: "10%" }}>
          <div className="copytext" style={{ marginTop: "10px" }}>
            We teamed up after a show in Philly. During a
            caffeine-charged writing session shortly thereafter we thought, "How crazy would it
            be to do standup in all 50 states?". With a little thought and a lot of coffee,
            we decided to turn that craziness into
            reality.
          </div>
          <div className="copytext" style={{ marginTop: "10px" }}>
            After quitting our jobs and selling all our things we bought a cargo
            van, converted it, and hit the open road. We've been traveling and doing comedy
            ever since. When we're not onstage, we're writing for television and
            film.
          </div>
          {this.state.isMobile ? <AboutMobile /> : <AboutWeb />}
        </div>
      </div>
    )
  }
}

export default About
