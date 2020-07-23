import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import tw, { css } from "twin.macro"

import { SEO } from "../components/SEO"

const Garden = ({ path }) => {
  const [state, setState] = useState({ filteredData: [], query: "" })
  const data = useStaticQuery(graphql`
    query gardenQuery {
      allMdx(
        filter: { frontmatter: { contentCategory: { eq: "post" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          __typename
          frontmatter {
            title
            path
            contentCategory
            tags
          }
          id
        }
      }
    }
  `)

  const allPosts = data.allMdx.nodes
  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== ""
  const posts = hasSearchResults ? filteredData : allPosts

  const handleInputChange = (event) => {
    const query = event.target.value
    const posts = data.allMdx.nodes || []
    const filteredData = posts.filter((post) => {
      const { title, tags } = post.frontmatter
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags && tags.join("").toLowerCase().includes(query.toLowerCase()))
      )
    })
    setState({ query, filteredData })
  }

  return (
    <>
      <SEO title="Digital Garden" pathname={path} />
      <section tw="flex flex-col mx-auto w-auto lg:w-900">
        <h1 tw="text-4xl mx-auto lg:ml-0 mt-16 mb-10 font-extrabold">
          Digital Garden
        </h1>
        <input
          tw="mx-8 lg:mx-0 py-1 px-3 rounded-md shadow mb-16 text-lg"
          value={state.query}
          type="text"
          onChange={handleInputChange}
          placeholder="Looking for something?"
        />
        {posts.map((post) => {
          return (
            <div
              className="group"
              tw="mb-3 mx-auto lg:mx-0 hover:bg-pink-400 p-2 rounded border w-1/2"
              key={post.id}
            >
              <h4 tw="text-lg">
                <Link to={`/garden${post.frontmatter.path}`}>
                  {post.frontmatter.title}
                </Link>
              </h4>
              <div tw="flex flex-auto">
                {post.frontmatter.tags.map((tag, index) => (
                  <span
                    key={`${post.id}-${index}`}
                    tw="text-sm italic ml-1 border px-2 py-1 mr-1 mt-1 rounded bg-pink-400 group-hover:bg-lightModeBody"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Garden
