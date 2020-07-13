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
            tags
          }
          id
        }
      }
    }
  `)

  const { nodes: posts } = data.allMdx

  const searchResults = posts.filter((post) => {
    if (post.__typename === "Mdx" && post.frontmatter.garden === true) {
      return (
        post.frontmatter.title.toLowerCase().includes(filter.toLowerCase()) ||
        post.frontmatter.tags.includes(filter.toLowerCase())
      )
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
      <h1 tw="text-4xl mt-16 mb-10 font-extrabold">Digital Garden</h1>
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
            tw="mb-3 flex items-center hover:bg-pink-400 p-2 rounded border"
            key={index}
          >
            <h4 tw="text-lg">
              <Link to="/">{title}</Link>
            </h4>
            <div tw="flex flex-auto">
              {frontmatter.tags.map((tag) => (
                <span
                  tw="text-sm ml-1 border px-1 rounded cursor-pointer"
                  onClick={() => setFilter(tag)}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Garden
