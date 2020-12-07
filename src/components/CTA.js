import React, { useState } from "react"
import "twin.macro"
import { CopyToClipboard } from "react-copy-to-clipboard"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import "tippy.js/themes/material.css"

export const CTA = () => {
  const [state, setState] = useState({
    value: "will@bikesandbytes.net",
    copied: false,
  })

  const onCopy = () => {
    setState({ ...state, copied: true })
  }

  return (
    <section tw="flex flex-col py-12 px-4 lg:mx-auto lg:w-900">
      <h2 tw="font-bold text-2xl mb-4">Now What?</h2>
      <p tw="font-normal text-xl mb-4">
        If you enjoyed this post, I'd love to continue the conversation on{" "}
        <a
          tw="text-pink-600 font-semibold hover:text-pink-700"
          href="https://twitter.com/will_devs"
        >
          Twitter
        </a>
        .
      </p>
      <Tippy
        content={state.copied ? "Email copied" : "Click to copy email"}
        theme="material"
        hideOnClick={false}
      >
        <p tw="font-normal text-xl">
          Social media not your thing? Shoot me an email:{" "}
          <CopyToClipboard onCopy={onCopy} text={state.value}>
            <span tw="text-pink-600 font-semibold cursor-pointer">
              will@willharris.dev
            </span>
          </CopyToClipboard>
        </p>
      </Tippy>
    </section>
  )
}
