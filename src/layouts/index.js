import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import tw, { css } from "twin.macro"

import Header from "../components/header"

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

  return (
    <>
      <Header
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        lightModeStyles={lightModeStyles}
        darkModeStyles={darkModeStyles}
      />
      <main
        tw="transition ease-linear duration-200"
        css={isChecked ? darkModeStyles : lightModeStyles}
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
