import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import tw, { css } from "twin.macro"

const Garden = () => {
  const data = useStaticQuery(graphql`
    query gardenQuery {
      allMdx(filter: { frontmatter: { contentCategory: { eq: "post" } } }) {
        nodes {
          frontmatter {
            title
            path
            garden
            contentCategory
          }
          id
        }
      }
    }
  `)

  const { nodes } = data.allMdx
  return (
    <section
      tw="flex flex-col mx-auto"
      css={[
        css`
          width: 900px;
          font-family: Inter;
        `,
      ]}
    >
      <h1 tw="text-4xl mt-16 mb-10 font-bold">Digital Garden</h1>
      {nodes.map((node) => {
        if (node.frontmatter.garden) {
          return (
            <Link to={`/garden${node.frontmatter.path}`} key={node.id}>
              {node.frontmatter.title}
            </Link>
          )
        }
      })}
    </section>
  )
}

export default Garden
