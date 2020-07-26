import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import tw, { css } from "twin.macro"

export const BikeCard = ({ path, title, image, keywords, twClasses }) => {
  return (
    <div
      className="group"
      tw="flex flex-col bg-gray-200 lg:grid lg:grid-cols-2 lg:border-b lg:shadow-sm lg:transform lg:hover:-translate-y-1 lg:transition-all lg:duration-300"
      css={[twClasses]}
    >
      <Link to={path}>
        <h2 tw="self-center pl-4 py-4 lg:mt-0 font-bold text-xl bg-gray-200">
          {title}
        </h2>
        <div tw="bg-gray-700 p-1 lg:ml-4">
          {keywords.map((keyword) => (
            <span tw="mt-4 ml-2 text-white italic text-xs font-bold tracking-wide">
              {keyword}
            </span>
          ))}
        </div>
      </Link>
      <Link tw="flex border-b lg:border-0 w-full bg-gray-200" to={path}>
        <Img
          tw="mx-auto lg:mr-4 my-4 rounded-lg"
          objectFit="right"
          fixed={image}
        />
      </Link>
    </div>
  )
}
