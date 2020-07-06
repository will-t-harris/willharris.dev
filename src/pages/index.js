import React from "react"
import tw, { css } from "twin.macro"

import SEO from "../components/SEO"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <section
      tw="flex flex-col py-56 mx-auto text-5xl font-semibold"
      css={[
        css`
          width: 900px;
          font-family: Inter;
        `,
      ]}
    >
      <h2 tw="mb-16">Hi, I'm Will</h2>
      <p tw="mb-16">
        I'm a software developer, content creator, and bikepacker from San
        Francisco
      </p>
      <p>
        Welcome to my digital garden{" "}
        <span role="img" aria-label="smiling face emoji">
          🙂
        </span>
      </p>
    </section>
  </>
)

export default IndexPage
