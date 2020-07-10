import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import tw from "twin.macro"

const Bike = ({ data }) => {
  return (
    <>
      <article tw="flex flex-col">
        <h1 tw="text-4xl font-bold text-center my-16">
          {data.mdx.frontmatter.title}
        </h1>
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
