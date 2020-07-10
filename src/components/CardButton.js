import React from "react"
import PropTypes from "prop-types"
import tw, { css } from "twin.macro"

export const CardButton = ({ buttonText, buttonUrl }) => {
  return (
    <a
      css={[tw`ml-4 p-2 self-center rounded text-xs font-bold tracking-wide`]}
      href={buttonUrl}
    >
      {buttonText}
    </a>
  )
}

CardButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
}
