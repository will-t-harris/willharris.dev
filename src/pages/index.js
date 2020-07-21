import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import tw, { css } from "twin.macro"

import { SEO } from "../components/SEO"

const IndexPage = ({ path }) => {
  const data = useStaticQuery(graphql`
    query homePageQuery {
      allFile(
        filter: {
          childMdx: {
            frontmatter: {
              contentCategory: { eq: "post" }
              garden: { eq: false }
            }
          }
        }
        sort: { fields: birthTime, order: ASC }
        limit: 5
      ) {
        nodes {
          id
          childMdx {
            frontmatter {
              path
              title
              tags
            }
          }
        }
      }
    }
  `)

  const { nodes: posts } = data.allFile

  return (
    <>
      <SEO title="Home" pathname={path} />
      <section tw="flex flex-col py-12 lg:py-40 mx-auto w-auto lg:w-900">
        <h2 tw="mb-8 lg:mb-16 mx-auto lg:mx-0 text-4xl font-bold">
          Hi, I'm Will
        </h2>
        <p tw="mb-8 lg:mb-16 px-8 lg:mx-0 lg:px-0 text-3xl font-medium">
          I'm a software developer, content creator, and bikepacker from San
          Francisco.{" "}
        </p>
        <p tw="lg:mb-16 px-8 lg:mx-0 lg:px-0 text-3xl font-medium">
          I'm currently focused on{" "}
          <a tw="text-pink-400 hover:underline" href="https://reactjs.org/">
            React
          </a>
          ,{" "}
          <a
            tw="text-pink-400 hover:underline"
            href="https://www.gatsbyjs.org/"
          >
            Gatsby
          </a>
          , and the{" "}
          <a tw="text-pink-400 hover:underline" href="https://jamstack.org/">
            Jamstack
          </a>
          .
        </p>
      </section>
      <section tw="flex flex-col mx-auto lg:w-900">
        <div tw="px-8 lg:px-0 flex items-baseline">
          <h2 tw=" text-3xl font-bold">Recent posts</h2>
          <Link tw="ml-auto text-xl hover:underline" to="/garden">
            all posts
          </Link>
        </div>
        <div tw="flex flex-col my-8 px-8 lg:px-0">
          {posts.map((post) => {
            const { frontmatter } = post.childMdx
            return (
              <Link
                className="group"
                key={post.id}
                tw="text-xl font-medium  pr-3 pt-2 rounded hover:bg-pink-400"
                to={`/garden${frontmatter.path}`}
              >
                {frontmatter.title}
                <div tw="flex pb-4">
                  {frontmatter.tags.map((tag, index) => {
                    return (
                      <span
                        key={`${post.id}-${index}`}
                        tw="text-sm italic ml-1 px-2 py-1 mr-1 mt-1 bg-pink-400 rounded group-hover:bg-lightModeBody tracking-wide"
                      >
                        {tag}
                      </span>
                    )
                  })}
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default IndexPage
