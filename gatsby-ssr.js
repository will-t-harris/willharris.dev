import React from "react"
import { MDXProvider } from "@mdx-js/react"
import tw, { css } from "twin.macro"
import "tailwindcss/dist/base.min.css"
import "typeface-roboto-slab"
import "typeface-inter"

import CodeBlock from "./src/components/CodeBlock"

const components = {
  a: (props) => (
    <a
      tw="relative text-pink-600 font-semibold hover:text-pink-700"
      {...props}
    />
  ),
  code: CodeBlock,
  img: (props) => <img {...props} />,
  li: (props) => <li tw="mb-4 mx-auto w-4/5" {...props} />,
  ol: (props) => <ol tw="list-decimal" {...props} />,
  p: (props) => <p tw="leading-relaxed mb-10" {...props} />,
  pre: (props) => <div {...props} />,
  ul: (props) => <ul tw="list-disc" {...props} />,
  wrapper: (props) => (
    <article
      css={[
        css`
          width: 900px;
        `,
        tw`text-xl mx-auto`,
      ]}
      {...props}
    />
  ),
}

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
