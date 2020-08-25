import React from "react"
import { MDXProvider } from "@mdx-js/react"
import "tailwindcss/dist/base.min.css"
import components from "./src/mdx-components"

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
