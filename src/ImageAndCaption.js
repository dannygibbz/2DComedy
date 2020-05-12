import React from "react"
import PropTypes from "prop-types"

const getWidthOrHeight = (imageWidth, imageHeight) => {
  if (imageWidth) {
    return { width: imageWidth }
  }
  if (imageHeight) {
    return { height: imageHeight }
  }

  return { width: 200 }
}

const generateImageStyle = (imageWidth, imageHeight) => {
  if (imageWidth) {
    return { width: "100%", objectFit: "cover" }
  }
  if (imageHeight) {
    return { height: "100%", objectFit: "cover" }
  }

  return { width: "100%", objectFit: "cover" }
}

export default function ImageAndCaption(props) {
  const { imageHeight, imageWidth, captionStyle, captionText, imageUrl } = props
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={getWidthOrHeight(imageWidth, imageHeight)}>
          <img
            src={imageUrl}
            style={generateImageStyle(imageWidth, imageHeight)}
            alt={captionText || ""}
          />
        </div>
      </div>
      <div style={captionStyle}>{captionText}</div>
    </div>
  )
}

ImageAndCaption.propTypes = {
  captionText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  imageUrl: PropTypes.string.isRequired,
  imageHeight: PropTypes.number,
  imageWidth: PropTypes.number,
}

ImageAndCaption.defaultProps = {
  captionStyle: { textAlign: "center", marginTop: "14px", marginBottom: "14px" },
}
