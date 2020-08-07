import React, { useState, useEffect, useRef } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import tw, { css } from "twin.macro"

import { SEO } from "../components/SEO"

const Garden = ({ path }) => {
  const [state, setState] = useState({ filteredData: [], query: "" })
  const searchInput = useRef(null)
  useEffect(() => {
    searchInput.current.focus()
  }, [])
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
        <h1 tw="text-4xl mx-auto lg:ml-0 mt-12 mb-10 font-extrabold">
          Digital Garden
        </h1>
        <input
          tw="mx-8 lg:mx-0 py-1 px-3 rounded-md shadow mb-16 text-lg"
          value={state.query}
          type="text"
          onChange={handleInputChange}
          ref={searchInput}
          placeholder="Looking for something?"
        />
        {posts.map((post) => {
          return (
            <Link to={`/garden${post.frontmatter.path}`} key={post.id}>
              <div
                className="group"
                tw="mb-3 mx-auto lg:mx-0 hover:bg-pink-400 py-2 px-8 rounded border w-1/2"
              >
                <h4 tw="text-lg text-center lg:text-left">
                  {post.frontmatter.title}
                </h4>
                <div tw="flex flex-col lg:flex-row flex-auto">
                  {post.frontmatter.tags.map((tag, index) => (
                    <span
                      key={`${post.id}-${index}`}
                      tw="text-sm text-center italic border px-2 py-1 mx-auto lg:mx-1 mt-1 rounded w-auto bg-pink-400 group-hover:bg-lightModeBody"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          )
        })}
      </section>
    </>
  )
}

export default Garden
