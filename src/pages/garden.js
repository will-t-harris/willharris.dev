import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import tw, { css } from "twin.macro"

const Garden = () => {
  const data = useStaticQuery(graphql`
    query gardenQuery {
      allMdx {
        nodes {
          frontmatter {
            title
            path
            garden
          }
          id
        }
      }
    }
  `)

  const { nodes } = data.allMdx
  return (
    <div
      tw="flex flex-col mx-auto"
      css={[
        css`
          width: 900px;
          font-family: Inter;
        `,
      ]}
    >
      {nodes.map((node) => {
        if (node.frontmatter.garden) {
          return (
            <Link to={`/garden${node.frontmatter.path}`} key={node.id}>
              {node.frontmatter.title}
            </Link>
          )
        }
      })}
    </div>
  )
}

export default Garden
