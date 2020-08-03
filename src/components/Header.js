import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import tw, { css } from "twin.macro"

import { ChainIcon } from "../components/icons/ChainIcon"

export const Header = () => {
  return (
    <header tw="transition ease-linear duration-100 fixed w-full shadow-sm antialiased z-20 bg-lightModeBody text-lightModeText">
      <nav tw="flex mx-auto lg:w-900">
        <Link to="/">
          <ChainIcon />
        </Link>
        <div
          tw="flex w-full md:justify-end self-center text-xl lg:text-2xl"
          css={[
            css`
              font-family: roboto slab;
            `,
          ]}
        >
          <Link to="/garden" tw="mr-6 lg:mr-12">
            Digital Garden
          </Link>
          <Link to="/bikes" tw="mr-6 lg:mr-12">
            Bikes
          </Link>
          <Link to="/projects" tw="mr-10 lg:mr-12">
            Projects
          </Link>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
