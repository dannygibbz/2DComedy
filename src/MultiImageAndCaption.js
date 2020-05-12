import React from "react"
import PropTypes from "prop-types"

const generateImageStyle = (imageWidth, imageHeight, numberOfImages) => {
  if (imageHeight) {
    return {
      height: imageHeight,
      marginRight: "10px",
      marginBottom: "10px",
      objectFit: "cover",
    }
  }

  return {
    width: `${100 / numberOfImages - 3}%`,
    marginRight: "10px",
    marginBottom: "10px",
    objectFit: "cover",
  }
}

export default function MultiImageAndCaption(props) {
  const { captionStyle, captionText, imageWidth, imageHeight, imageUrls } = props

  if (!(imageUrls && imageUrls.length)) {
    return null
  }

  if (imageWidth) {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          <div style={{ width: imageWidth }}>
            {imageUrls.map((imageUrl, inx) => (
              <img
                src={imageUrl}
                style={generateImageStyle(imageWidth, imageHeight, imageUrls.length)}
                key={inx}
                alt="img"
              />
            ))}
          </div>
        </div>
        <p style={captionStyle}>{captionText}</p>
      </div>
    )
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {imageUrls.map((imageUrl, inx) => (
          <img
            src={imageUrl}
            style={generateImageStyle(imageWidth, imageHeight, imageUrls.length)}
            key={inx}
            alt="img"
          />
        ))}
      </div>
      <p style={captionStyle}>{captionText}</p>
    </div>
  )
}

MultiImageAndCaption.propTypes = {
  captionText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  imageUrls: PropTypes.array.isRequired,
  imageHeight: PropTypes.number,
  imageWidth: PropTypes.number,
}

MultiImageAndCaption.defaultProps = {
  captionStyle: { textAlign: "center", marginTop: "14px", marginBottom: "14px" },
}
