import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Bike = ({ data }) => {
  return (
    <>
      <h1 tw="text-4xl font-bold mx-auto">{data.mdx.frontmatter.title}</h1>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
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
