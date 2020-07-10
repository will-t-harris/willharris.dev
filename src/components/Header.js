import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import tw, { css } from "twin.macro"
import useDarkMode from "use-dark-mode"

import { themeLight, themeDark } from "../theme"
import { DarkModeToggle } from "./DarkModeToggle"
import { ChainIcon } from "../components/icons/chainIcon"

const Header = () => {
  const darkMode = useDarkMode()
  return (
    <header
      tw="transition ease-linear duration-100 fixed w-full shadow-sm antialiased z-20"
      css={[darkMode.value ? themeDark : themeLight]}
    >
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
          tw="flex w-full justify-end self-center text-2xl"
          css={[
            css`
              font-family: roboto slab;
            `,
          ]}
        >
          <Link to="/garden" tw="mr-12">
            Digital Garden
          </Link>
          <Link to="/bikes" tw="mr-12">
            Bikes
          </Link>
          <Link to="/projects" tw="mr-12">
            Projects
          </Link>
          <DarkModeToggle />
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

export default Header
