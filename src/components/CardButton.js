import React from "react"
import PropTypes from "prop-types"
import tw, { css } from "twin.macro"

export const CardButton = ({ buttonText, buttonUrl }) => {
  return (
    <a tw="bg-blue-600 ml-4 p-2 self-center rounded" href={buttonUrl}>
      {buttonText}
    </a>
  )
}

CardButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
}
