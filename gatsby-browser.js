import React from "react"
import { MDXProvider } from "@mdx-js/react"
import tw, { css } from "twin.macro"
import "tailwindcss/dist/base.min.css"
import "typeface-roboto-slab"
import "typeface-inter"

import { CodeBlock } from "./src/components/CodeBlock"

const components = {
  a: (props) => (
    <a tw="text-pink-600 font-semibold hover:text-pink-700" {...props} />
  ),
  code: CodeBlock,
  h2: (props) => <h2 tw="text-2xl font-bold" {...props} />,
  h3: (props) => <h3 tw="text-xl font-bold" {...props} />,
  img: (props) => <img {...props} />,
  li: (props) => <li tw="text-xl mb-4 mx-auto w-4/5" {...props} />,
  ol: (props) => <ol tw="list-decimal" {...props} />,
  p: (props) => <p tw="leading-relaxed mb-10 text-xl" {...props} />,
  pre: (props) => <pre {...props} />,
  ul: (props) => <ul tw="list-disc" {...props} />,
  wrapper: (props) => (
    <article
      tw="mx-auto"
      css={[
        css`
          width: 900px;
        `,
      ]}
      {...props}
    />
  ),
}

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
