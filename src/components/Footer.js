import React from "react"
import ts, { css } from "twin.macro"

import { GatsbyIcon } from "./icons/GatsbyIcon"
import { NetlifyIcon } from "./icons/NetlifyIcon"

export const Footer = () => {
  return (
    <footer tw="bg-lightModeBody text-lightModeText border-t border-lightModeText text-lg font-medium">
      <div tw="flex flex-col lg:grid lg:grid-cols-4 mx-auto py-10 lg:w-900">
        <p tw="mx-auto lg:mx-0 lg:col-start-1 lg:col-span-2">
          Designed and developed by Will Harris
        </p>
        <p tw="mx-auto lg:mx-0 lg:col-start-1 flex flex-row">
          Built with
          <a href="https://www.gatsbyjs.org/">
            <GatsbyIcon />
          </a>
        </p>
        <p tw="mx-auto lg:mx-0 lg:col-start-1 flex flex-row">
          Hosted on{" "}
          <a href="https://www.netlify.com/">
            <NetlifyIcon />
          </a>
        </p>
        <p tw="mx-auto lg:mx-0 underline font-bold mt-4 lg:mt-0 lg:col-start-4 lg:row-start-1">
          Social
        </p>
        <a
          tw="mx-auto lg:mx-0 lg:col-start-4 lg:row-start-2"
          href="https://twitter.com/will__tweets"
        >
          <p tw="font-medium">Twitter</p>
        </a>
        <a
          tw="mx-auto lg:mx-0 lg:col-start-4 lg:row-start-3"
          href="https://github.com/will-t-harris"
        >
          <p tw="font-medium">GitHub</p>
        </a>
        <a
          tw="mx-auto lg:mx-0 lg:col-start-4 lg:row-start-4"
          href="https://www.linkedin.com/in/will-t-harris/"
        >
          <p tw="font-medium">LinkedIn</p>
        </a>
      </div>
    </footer>
  )
}
