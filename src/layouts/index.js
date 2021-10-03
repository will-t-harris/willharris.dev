import React from "react"
import PropTypes from "prop-types"
import "twin.macro"

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main tw="flex flex-col pt-20 transition ease-linear duration-100 antialiased bg-lightModeBody text-lightModeText">
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
