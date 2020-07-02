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
        tw="flex w-full justify-end self-center text-2xl text-headerText"
        css={[
          css`
            font-family: roboto slab;
          `,
        ]}
      >
        <Link>Garden</Link>
        <Link>Bikes</Link>
        <Link>Projects</Link>
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
