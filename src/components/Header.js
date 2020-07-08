import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import tw, { css } from "twin.macro"
import Switch from "react-switch"
import { useTheme } from "../ThemeContext"
import { themeDark, themeLight } from "../theme"

import { ChainIcon } from "../components/icons/chainIcon"

const Header = () => {
  const themeState = useTheme()

  return (
    <header
      tw="transition ease-linear duration-100 fixed w-full shadow-sm antialiased"
      css={[themeState.dark ? themeDark : themeLight]}
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
            Garden
          </Link>
          <Link to="/bikes" tw="mr-12">
            Bikes
          </Link>
          <Link to="/projects" tw="mr-12">
            Projects
          </Link>
          <Switch
            tw="self-center"
            onChange={themeState.toggle}
            checked={themeState.dark}
            aria-label="dark mode toggle button"
            checkedIcon={false}
            uncheckedIcon={false}
            offColor="#323d79"
            offHandleColor="#f4f9fc"
            onColor="#f4f9fc"
            onHandleColor="#272525"
            handleDiameter={20}
          />
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
