import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import tw, { css } from "twin.macro"

const Bikes = () => {
  const data = useStaticQuery(graphql`
    query bikeQuery {
      allMdx(filter: { frontmatter: { contentCategory: { eq: "bike" } } }) {
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
      <h1 tw="text-4xl mt-16 mb-10 font-bold">My (Current) Bike Herd</h1>
      {nodes.map((node) => (
        <Link to={`/bike${node.frontmatter.path}`}>
          {node.frontmatter.title}
        </Link>
      ))}
    </section>
  )
}

export default Bikes
