import React from "react"
import PropTypes from "prop-types"
import tw, { css } from "twin.macro"
import useDarkMode from "use-dark-mode"

export const CardButton = ({ buttonText, buttonUrl }) => {
  const darkMode = useDarkMode()
  return (
    <a
      css={[
        darkMode.value
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
