import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import tw, { css } from "twin.macro"

import Header from "../components/header"

const Layout = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const lightModeStyles = css`
    background: #f4f9fc;
    color: #0f1b61;
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
