import React from "react"
import PropTypes from "prop-types"

// Inspired by: https://css-tricks.com/snippets/css/simple-and-nice-blockquote-styling/
const BlockQuote = (props) => {
  let { quote, fontSize } = props

  if (!fontSize) fontSize = "26px"

  return (
    <div
      style={{
        marginRight: 30,
        marginLeft: 30,
        paddingLeft: 10,
        paddingRight: 20,
        marginBottom: 18,
        borderLeft: "10px solid rgb(235, 167, 136)",
        fontFamily: "Times New Roman",
        fontSize,
        fontStyle: "italic",
      }}
    >
      <p style={{ marginBottom: 0, paddingLeft: 10 }}>
        <span
          style={{
            fontFamily: "Poly, serif",
            fontSize: "3.3em",
            lineHeight: "0.1em",
            marginRight: "0.23em",
            color: "rgb(0, 0, 0, 0.42)",
            verticalAlign: "bottom",
            marginLeft: "-20px",
          }}
        >
          "
        </span>
        {quote}
        <span
          style={{
            fontFamily: "Poly, serif",
            fontSize: "3.3em",
            lineHeight: "0.1em",
            marginRight: "0.23em",
            color: "rgb(0, 0, 0, 0.42)",
            verticalAlign: "bottom",
            // marginLeft: "-20px",
          }}
        >
          "
        </span>
      </p>
    </div>
  )
}

BlockQuote.propTypes = {
  quote: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
}

export default BlockQuote
