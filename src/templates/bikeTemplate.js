import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "twin.macro"

import { SEO } from "../components/SEO"

const Bike = ({ data, path }) => {
  const { title } = data.mdx.frontmatter
  return (
    <>
      <SEO title={title} pathname={path} />
      <article tw="flex flex-col">
        <h1 tw="text-4xl font-bold text-center my-16">{title}</h1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </article>
    </>
  )
}

export default Bike

export const bikeQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { path: { eq: $slug } }) {
      body
      frontmatter {
        path
        title
      }
    }
  }
`
