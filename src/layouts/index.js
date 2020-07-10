import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import tw, { css } from "twin.macro"
import useDarkMode from "use-dark-mode"

import { themeLight, themeDark } from "../theme"
import Header from "../components/Header"

const Layout = ({ children }) => {
  const darkMode = useDarkMode()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <main
        tw="flex flex-col pt-20 transition ease-linear duration-100 antialiased"
        css={[darkMode.value ? themeDark : themeLight]}
      >
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
