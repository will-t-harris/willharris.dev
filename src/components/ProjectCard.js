import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import tw, { css } from "twin.macro"

import { CardButton } from "./CardButton"

export const ProjectCard = ({
  projectName,
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
        tw="flex bg-gray-400 rounded-t"
        css={[
          css`
            height: 20rem;
          `,
        ]}
      >
        <h2 tw="my-auto ml-20 text-2xl font-bold">
          <Link to={pageUrl}>{projectName}</Link>
        </h2>
      </div>
      <div
        tw="flex bg-gray-200"
        css={[
          css`
            height: 8.125rem;
          `,
        ]}
      >
        <CardButton buttonText="Source" buttonUrl={sourceUrl} />
        {npmUrl && <CardButton buttonText="NPM" buttonUrl={npmUrl} />}
        {liveUrl && <CardButton buttonText="Live" buttonUrl={liveUrl} />}
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
