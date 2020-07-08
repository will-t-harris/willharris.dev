import React from "react"
import tw, { css } from "twin.macro"

export const CardButton = ({ buttonText, buttonUrl }) => {
  return (
    <a tw="bg-blue-600 ml-4 p-2 self-center rounded" href={buttonUrl}>
      {buttonText}
    </a>
  )
}
