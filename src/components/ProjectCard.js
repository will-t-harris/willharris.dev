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
  builtWith,
}) => {
  return (
    <section tw="my-4 lg:my-10 lg:shadow-lg lg:w-900">
      <div
        tw="rounded-t overflow-hidden border border-pink-400 border-b-0 mx-auto h-32 lg:w-900 lg:h-64"
        css={[
          css`
            width: 300px;
          `,
        ]}
      >
        {projectImage && (
          <Link to={pageUrl}>
            <Img fluid={projectImage} />
          </Link>
        )}
      </div>
      <div
        tw="rounded-b flex flex-col lg:flex-row border border-pink-400 mx-auto h-auto lg:w-900 lg:h-32"
        css={[
          css`
            width: 300px;
          `,
        ]}
      >
        <div tw="flex justify-center" css={[css``]}>
          <CardButton buttonText="SOURCE" buttonUrl={sourceUrl} />
          {npmUrl && <CardButton buttonText="NPM" buttonUrl={npmUrl} />}
          {liveUrl && <CardButton buttonText="LIVE" buttonUrl={liveUrl} />}
        </div>
        <h2 tw="self-center justify-end mt-2 lg:w-64 lg:ml-8 text-2xl font-bold">
          <Link to={pageUrl}>{projectName}</Link>
        </h2>
        <h3 tw="font-semibold ml-24 my-2">Built with:</h3>
        <ul tw="flex flex-col flex-wrap list-disc lg:mt-6 pl-12 mr-32">
          {builtWith &&
            builtWith.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
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
