import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import tw, { css } from "twin.macro"

const Garden = () => {
  const [filter, setFilter] = useState("")
  const data = useStaticQuery(graphql`
    query gardenQuery {
      allMdx(filter: { frontmatter: { contentCategory: { eq: "post" } } }) {
        nodes {
          __typename
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

  const { nodes: posts } = data.allMdx

  const searchResults = posts.filter((post) => {
    if (post.__typename === "Mdx" && post.frontmatter.garden === true) {
      return post.frontmatter.title.toLowerCase().includes(filter.toLowerCase())
    }
  })

  const handleSearch = (event) => {
    setFilter(event.target.value)
  }

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
      <input
        tw="py-1 px-3 rounded-md mb-6 text-lg w-full"
        value={filter}
        type="text"
        onChange={handleSearch}
        placeholder="Looking for something?"
      />
      {searchResults.map(({ frontmatter }, index) => {
        const title = frontmatter.title
        return (
          <div
            className="mb-3 flex items-center  hover:bg-dark-bg p-2 rounded"
            key={index}
          >
            <span className="mr-2"></span>
            <h4 className="text-base">
              <Link className="no-gradient" to="/">
                {title}
              </Link>
            </h4>
          </div>
        )
      })}
    </section>
  )
}

export default Garden
