import React, { Component } from "react"

class WistiaEmbed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videoLoaded: false,
    }

    const { hashedId, ...embedOptions } = this.props
    window._wq = window._wq || []
    window._wq.push({
      id: hashedId,
      options: Object.assign(embedOptions, {
        videoFoam: true,
        autoPlay: true,
        endVideoBehavior: "loop",
        muted: true,
        controlsVisibleOnLoad: false,
        copyLinkAndThumbnail: false,
        fullscreenButton: false,
        playbar: false,
        playButton: false,
        smallPlayButton: false,
        settingsControl: false,
        silentAutoPlay: true,
        volumeControl: false,
      }),
      onReady: (video) => {
        this.handle = video
        let self = this
        // this.setState({ videoLoaded: true })
        video.bind("play", function() {
          self.setState({ videoLoaded: true })
        })
      },
    })
  }

  render() {
    return (
      <div>
        <div
          className="wistia_responsive_padding"
          style={{ padding: "56.25% 0 0 0", position: "relative" }}
        >
          <div
            className="wistia_responsive_wrapper"
            style={{
              height: "100%",
              left: "0",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          >
            <div
              className={`wistia_embed wistia_async_${this.props.hashedId}`}
              style={{ height: "100%", width: "100%" }}
            >
              {!this.state.videoLoaded && (
                <div
                  id="wistia_img"
                  className="wistia_swatch"
                  style={{
                    left: 0,
                    top: 0,
                    overflow: "hidden",
                    transition: "opacity 200ms",
                    width: "100%",
                  }}
                >
                  <img
                    alt="placeholderImage"
                    src={`https://fast.wistia.com/embed/medias/${
                      this.props.hashedId
                    }/swatch`}
                    style={{
                      filter: "blur(5px)",
                      height: "100%",
                      objectFit: "contain",
                      width: "100%",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentWillUnmount() {
    this.handle && this.handle.remove()
  }
}

export default WistiaEmbed
