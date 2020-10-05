import React from "react"
import { CodeBlock } from "./components/CodeBlock"
import tw, { css } from "twin.macro"

export default {
  a: (props) => (
    <a tw="text-pink-600 font-semibold hover:text-pink-700" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      tw="px-2 mx-6 my-4 bg-pink-200 shadow border-l-4 border-gray-600"
      {...props}
    />
  ),
  code: CodeBlock,
  h1: (props) => <h1 tw="text-4xl font-bold" {...props} />,
  h2: (props) => (
    <h2
      tw="text-3xl px-4 pt-4 text-center w-screen lg:text-left lg:px-0 font-bold"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      tw="text-2xl px-4 py-4 text-center w-screen lg:text-left lg:px-0 font-bold"
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      tw="text-xl px-4 text-center w-screen lg:text-left lg:px-0 font-bold"
      {...props}
    />
  ),
  img: (props) => <img {...props} />,
  inlineCode: (props) => (
    <code
      tw="bg-gray-700 text-gray-200 text-lg lg:text-xl rounded p-1"
      {...props}
    />
  ),
  kbd: (props) => (
    <kbd tw="bg-pink-400 text-lightModeText rounded p-2" {...props} />
  ),
  li: (props) => (
    <li tw="text-xl my-8 mx-auto w-64 lg:w-4/5 list-none" {...props} />
  ),
  ol: (props) => <ol tw="list-decimal" {...props} />,
  p: (props) => <p tw="leading-relaxed my-6 mx-4 text-xl" {...props} />,
  pre: (props) => <pre {...props} />,
  span: (props) => <span tw="mt-8" {...props} />,
  table: (props) => <table tw="mb-6 mx-auto" {...props} />,
  td: (props) => <td tw="px-2 py-1 border border-gray-400" {...props} />,
  th: (props) => (
    <th tw="px-2 py-1 border border-gray-400 bg-lightModeBody" {...props} />
  ),
  tr: (props) => <tr tw="odd:bg-gray-400" {...props} />,
  ul: (props) => <ul tw="list-disc mb-4" {...props} />,
  wrapper: (props) => <article tw="mx-auto lg:w-900" {...props} />,
}
