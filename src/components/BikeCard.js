import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import "twin.macro"

export const BikeCard = ({ path, title, image, twClasses }) => {
  return (
    <div
      className="group"
      tw="flex flex-col mb-8 lg:mb-0 lg:border lg:rounded-xl lg:hover:shadow-lg"
      css={[twClasses]}
    >
      <Link to={path}>
        <h2 tw="text-center pl-4 pt-4 pb-2 lg:mt-0 font-bold text-xl">
          {title}
        </h2>
      </Link>
      <Link tw="flex border-b lg:border-0 w-full" to={path}>
        <Img
          tw="mx-auto mt-2 lg:mb-6 lg:rounded-lg"
          objectFit="right"
          fixed={image}
          durationFadeIn={100}
        />
      </Link>
    </div>
  )
}
