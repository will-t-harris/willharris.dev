import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import tw, { css } from "twin.macro"
import { MDXProvider } from "@mdx-js/react"

import Header from "../components/Header"
import { CodeBlock } from "../components/CodeBlock"

const Layout = ({ children }) => {
  const [isChecked, setIsChecked] = useState(getInitialMode())

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(isChecked))
  }, [isChecked])

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage
    const savedMode = JSON.parse(localStorage.getItem("dark"))
    const userPrefersDark = getPrefColorScheme()

    if (userPrefersDark) {
      return true
    } else if (isReturningUser) {
      return savedMode
    } else {
      return false
    }
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return

    return window.matchMedia("(prefers-color-scheme: dark)").matches
  }

  const lightModeStyles = css`
    background: #f4f9fc;
    color: #323d79;
  `

  const darkModeStyles = css`
    background: #272525;
    color: #f4f9fc;
  `

  const components = {
    code: CodeBlock,
    img: (props) => <img {...props} />,
    p: (props) => <p tw="leading-relaxed" {...props} />,
    pre: (props) => <div {...props} />,
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

  return (
    <MDXProvider components={components}>
      <Header
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        lightModeStyles={lightModeStyles}
        darkModeStyles={darkModeStyles}
      />
      <main
        tw="flex flex-col transition ease-linear duration-100"
        css={isChecked ? darkModeStyles : lightModeStyles}
      >
        {children}
      </main>
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
