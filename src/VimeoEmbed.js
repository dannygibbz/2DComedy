import React, { useState } from "react"
import Vimeo from "@u-wave/react-vimeo"

export default function VimeoEmbed(props) {
  const [isLoaded, setLoaded] = useState(false)

  return (
    <Vimeo
      className="turd"
      video={302510356}
      width={window.innerWidth}
      autoplay={true}
      showByline={false}
      background={true}
      loop={true}
      showPortrait={false}
      showTitle={false}
      onLoaded={() => setLoaded(true)}
    />
  )
}
