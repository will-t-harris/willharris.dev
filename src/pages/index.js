import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "twin.macro"
import { CopyToClipboard } from "react-copy-to-clipboard"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import "tippy.js/themes/material.css"

import { SEO } from "../components/SEO"

const IndexPage = ({ path }) => {
  const [isCopied, setIsCopied] = useState(false)
  const data = useStaticQuery(graphql`
    query homePageQuery {
      allFile(
        filter: {
          childMdx: {
            frontmatter: {
              contentCategory: { eq: "post" }
              frontPage: { eq: true }
            }
          }
        }
        sort: { fields: changeTime, order: DESC }
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

  const onCopy = () => {
    setIsCopied(true)
  }

  const { nodes: posts } = data.allFile

  return (
    <>
      <SEO title="Home" pathname={path} />
      <section tw="flex flex-col py-12 pt-20 mx-auto mb-32 w-auto lg:w-900">
        <h2 tw="mb-4 mx-auto lg:mx-0 text-3xl font-bold">
          Hi, I'm Will
        </h2>
        <p tw="px-8 lg:mx-0 lg:px-0 text-2xl font-medium">
          I'm a software developer, content creator, and bikepacker from
          Berkeley.{" "}
        </p>
        <p tw="lg:mb-4 px-8 lg:mx-0 lg:px-0 text-2xl font-medium">
          I currently work at{" "}
          <a
            tw="text-pink-600 font-semibold underline hover:no-underline"
            href="https://yeti.co/"
          >
            Yeti
          </a>{" "}
          making custom apps with React, Vue, TypeScript, and Node (✨ amongst
          other characters ✨).
        </p>
        <p tw="px-8 lg:px-0 text-2xl font-medium">
          Want to get in touch? The best way is by email:{" "}
          <Tippy
            content={isCopied ? "Email copied" : "Click to copy"}
            theme="material"
            hideOnClick={false}
          >
            <span>
              <CopyToClipboard onCopy={onCopy} text="will@willharris.dev">
                <span tw="text-pink-600 font-medium cursor-pointer">
                  will@willharris.dev
                </span>
              </CopyToClipboard>
            </span>
          </Tippy>
        </p>
      </section>
      <section tw="flex flex-col mx-auto lg:w-900">
        <div tw="px-8 lg:px-0 flex items-baseline">
          <h2 tw=" text-3xl font-bold">From The Garden</h2>
          <Link tw="ml-auto text-xl hocus:underline" to="/garden">
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
                tw="flex flex-col text-xl font-medium px-4 pt-2 rounded hover:shadow border mb-2 focus:border-pink-400 focus:border-2"
                to={`/garden${frontmatter.path}`}
              >
                {frontmatter.title}
                <div tw="flex pb-4 ml-auto">
                  {frontmatter.tags.map((tag, index) => {
                    return (
                      <span
                        key={`${post.id}-${index}`}
                        tw="text-sm italic px-2 py-1 mr-1 mt-1 bg-pink-400 rounded tracking-wide"
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
