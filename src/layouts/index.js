import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import tw, { css } from "twin.macro"

import Header from "../components/Header"

const Layout = ({ children }) => {
  // const [isChecked, setIsChecked] = useState(getInitialMode())

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // useEffect(() => {
  //   localStorage.setItem("dark", JSON.stringify(isChecked))
  // }, [isChecked])

  // function getInitialMode() {
  //   const isReturningUser = "dark" in localStorage
  //   const savedMode = JSON.parse(localStorage.getItem("dark"))
  //   const userPrefersDark = getPrefColorScheme()

  //   if (userPrefersDark) {
  //     return true
  //   } else if (isReturningUser) {
  //     return savedMode
  //   } else {
  //     return false
  //   }
  // }

  // function getPrefColorScheme() {
  //   if (!window.matchMedia) return

  //   return window.matchMedia("(prefers-color-scheme: dark)").matches
  // }

  return (
    <>
      <Header />
      <main tw="flex flex-col pt-20 transition ease-linear duration-100">
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
