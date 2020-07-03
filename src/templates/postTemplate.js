import React from "react"
import { graphql } from "gatsby"

const Post = ({ data }) => {
  console.log(data)
  return <div>Post template</div>
}

export default Post

export const postQuery = graphql`
  query postQuery($slug: String!) {
    mdx(frontmatter: { path: { eq: $slug } }) {
      frontmatter {
        path
        title
      }
    }
  }
`
