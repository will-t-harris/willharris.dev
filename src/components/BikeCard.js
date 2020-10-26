import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import "twin.macro"

export const BikeCard = ({ path, title, image, twClasses }) => {
  return (
    <div
      className="group"
      tw="flex flex-col bg-gray-200 mb-8 lg:mb-0 lg:border-b lg:shadow-sm lg:transform lg:hover:-translate-y-1 lg:transition-transform lg:duration-300 group-hover:bg-pink-400"
      css={[twClasses]}
    >
      <Link to={path} tw="group-hocus:bg-pink-400">
        <h2 tw="text-center pl-4 pt-4 pb-2 lg:mt-0 font-bold text-xl group-hocus:bg-pink-400">
          {title}
        </h2>
      </Link>
      <Link tw="flex border-b lg:border-0 w-full group-hocus:bg-pink-400" to={path}>
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
