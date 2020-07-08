import React from "react"
import tw, { css } from "twin.macro"

import { ProjectCard } from "../components/ProjectCard"

const Projects = () => {
  return (
    <section
      tw="flex flex-col mx-auto"
      css={[
        css`
          width: 900px;
          font-family: Inter;
        `,
      ]}
    >
      <h1 tw="text-4xl mt-16 mb-10 font-bold">Projects</h1>
      <ProjectCard
        projectName="use-instagram-feed"
        pageUrl="/projects/use-instagram-feed"
        sourceUrl="https://github.com/will-t-harris/use-instagram-feed"
        npmUrl="https://www.npmjs.com/package/use-instagram-feed"
      />
      <ProjectCard
        projectName="move-with-madeline"
        pageUrl="/projects/move-with-madeline"
        sourceUrl="https://github.com/will-t-harris/move-with-madeline"
        liveUrl="https://movewithmadeline.com"
      />
      <ProjectCard
        projectName="abq-bike-trails"
        pageUrl="abq-bike-trails"
        sourceUrl="https://github.com/abq-outdoor-trails/outdoor-trails-master"
        liveUrl="http://abqtrails.deepdivecoding.com/"
      />
    </section>
  )
}

export default Projects
