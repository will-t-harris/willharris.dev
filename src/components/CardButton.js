import React from "react"
import PropTypes from "prop-types"
import tw, { css } from "twin.macro"

export const CardButton = ({ buttonText, buttonUrl }) => {
  return <a href={buttonUrl}>{buttonText}</a>
}

CardButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
}
