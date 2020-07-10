import React from "react"
import { MDXProvider } from "@mdx-js/react"
import tw, { css } from "twin.macro"
import "tailwindcss/dist/base.min.css"
import "typeface-roboto-slab"
import "typeface-inter"

import CodeBlock from "./src/components/CodeBlock"
import {
  COLOR_MODE_KEY,
  COLORS,
  INITIAL_COLOR_MODE_CSS_PROP,
} from "./src/constants"

function setColorsByTheme() {
  const colors = "🌈"
  const colorModeKey = "🔑"
  const colorModeCssProp = "⚡️"

  const mql = window.matchMedia("(prefers-color-scheme: dark)")
  const prefersDarkFromMQ = mql.matches
  const persistedPreference = localStorage.getItem(colorModeKey)

  let colorMode = "light"

  const hasUsedToggle = typeof persistedPreference === "string"

  if (hasUsedToggle) {
    colorMode = persistedPreference
  } else {
    colorMode = prefersDarkFromMQ ? "dark" : "light"
  }

  let root = document.documentElement

  root.style.setProperty(colorModeCssProp, colorMode)

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`

    root.style.setProperty(cssVarName, colorByTheme[colorMode])
  })
}

const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme)
    .replace("'🌈'", JSON.stringify(COLORS))
    .replace("🔑", COLOR_MODE_KEY)
    .replace("⚡️", INITIAL_COLOR_MODE_CSS_PROP)

  let calledFunction = `(${boundFn})()`

  calledFunction = Terser.minify(calledFunction).code

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />
}

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
  return (
    <ThemeProvider>
      <GlobalStyles />
      <MDXProvider components={components}>{element}</MDXProvider>
    </ThemeProvider>
  )
}
