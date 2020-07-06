import React from "react"
import tw, { css } from "twin.macro"

export const CTA = () => {
  return (
    <footer
      tw="flex flex-col self-end py-20"
      css={[
        css`
          width: 900px;
        `,
      ]}
    >
      <h2
        tw="font-bold text-2xl"
        css={[
          css`
            width: 450px;
          `,
        ]}
      >
        Now What?
      </h2>
      <p
        tw="font-normal text-xl"
        css={[
          css`
            width: 450px;
          `,
        ]}
      >
        If you enjoyed this post, I'd love to continue the conversation on{" "}
        <a
          tw="text-pink-600 font-semibold hover:text-green-600"
          href="https://twitter.com/will__tweets"
        >
          Twitter
        </a>
        .
      </p>
      <p
        tw="font-normal text-xl"
        css={[
          css`
            width: 450px;
          `,
        ]}
      >
        Social media not your thing? Shoot me an email:{" "}
        <span tw="text-pink-600 font-semibold">will@bikesandbytes.net</span>
      </p>
    </footer>
  )
}
