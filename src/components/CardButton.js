import React from "react"
import PropTypes from "prop-types"
import tw, { css } from "twin.macro"
import { useTheme } from "../ThemeContext"

export const CardButton = ({ buttonText, buttonUrl }) => {
  const themeState = useTheme()
  return (
    <a
      css={[
        themeState.dark
          ? tw`bg-pink-400 text-lightModeText hover:bg-lightModeBlue hover:text-darkModeText`
          : tw`bg-lightModeBlue text-darkModeText hover:bg-pink-400 hover:text-lightModeText`,
        tw`ml-4 p-2 self-center rounded text-xs font-bold tracking-wide`,
      ]}
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
