import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import tw, { css } from "twin.macro"

import { CardButton } from "./CardButton"

export const ProjectCard = ({
  projectName,
  projectImage,
  sourceUrl,
  npmUrl,
  liveUrl,
  pageUrl,
}) => {
  return (
    <section
      tw="my-16 shadow-lg"
      css={[
        css`
          height: 28.125rem;
          width: 56.25rem;
        `,
      ]}
    >
      <div
        tw="rounded-t overflow-hidden border border-pink-400 border-b-0"
        css={[
          css`
            height: 20rem;
          `,
        ]}
      >
        {projectImage && (
          <Link to={pageUrl}>
            <Img fixed={projectImage} />
          </Link>
        )}
      </div>
      <div
        tw="rounded-b flex border border-pink-400"
        css={[
          css`
            height: 8.125rem;
          `,
        ]}
      >
        <CardButton buttonText="SOURCE" buttonUrl={sourceUrl} />
        {npmUrl && <CardButton buttonText="NPM" buttonUrl={npmUrl} />}
        {liveUrl && <CardButton buttonText="LIVE" buttonUrl={liveUrl} />}
        <h2 tw="self-center justify-end ml-20 text-2xl font-bold">
          <Link to={pageUrl}>{projectName}</Link>
        </h2>
      </div>
    </section>
  )
}

ProjectCard.propTypes = {
  projectName: PropTypes.string.isRequired,
  sourceUrl: PropTypes.string.isRequired,
  npmUrl: PropTypes.string,
  liveUrl: PropTypes.string,
  pageUrl: PropTypes.string.isRequired,
}
