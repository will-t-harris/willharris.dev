import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import tw, { css } from "twin.macro"

import { ChainIcon } from "../components/icons/chainIcon"

const Header = ({ siteTitle }) => (
  <header tw="bg-lightModeBody">
    <nav
      tw="flex mx-auto"
      css={[
        css`
          width: 900px;
        `,
      ]}
    >
      <Link to="/">
        <ChainIcon />
      </Link>
      <div
        tw="flex w-full justify-end self-center text-2xl text-lightModeText"
        css={[
          css`
            font-family: roboto slab;
          `,
        ]}
      >
        <Link to="/garden" tw="mr-12">
          Garden
        </Link>
        <Link to="/bikes" tw="mr-12">
          Bikes
        </Link>
        <Link to="/projects" tw="mr-12">
          Projects
        </Link>
        <div tw="flex relative self-center w-16 h-8 bg-blue-300 rounded-full">
          <div tw="absolute my-auto ml-1 inset-y-0 h-5 w-5 bg-white rounded-full" />
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
