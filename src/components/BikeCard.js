import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import tw from "twin.macro"

export const BikeCard = ({ path, title, image }) => {
  return (
    <>
      <Link tw="flex border-b self-center w-full" to={path}>
        <span tw="self-center ml-24 font-semibold text-xl">{title}</span>
        <Img
          tw="flex ml-auto mr-4 my-4 rounded-lg"
          objectFit="right"
          fixed={image}
        />
      </Link>
    </>
  )
}
