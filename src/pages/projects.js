import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw, { css } from "twin.macro"

import { ProjectCard } from "../components/ProjectCard"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query projectsQuery {
      moveWithMadeline: file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "move-with-madeline" }
      ) {
        childImageSharp {
          fixed(width: 900) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      instagramPhone: file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "instagram-phone" }
      ) {
        childImageSharp {
          fixed(width: 900) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      abqBikeTrails: file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "abq-bike-trails" }
      ) {
        childImageSharp {
          fixed(width: 900) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

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
        projectName="move-with-madeline"
        projectImage={data.moveWithMadeline.childImageSharp.fixed}
        pageUrl="/projects/move-with-madeline"
        sourceUrl="https://github.com/will-t-harris/move-with-madeline"
        liveUrl="https://movewithmadeline.com"
      />
      <ProjectCard
        projectName="abq-bike-trails"
        projectImage={data.abqBikeTrails.childImageSharp.fixed}
        pageUrl="/projects/abq-bike-trails"
        sourceUrl="https://github.com/abq-outdoor-trails/outdoor-trails-master"
        liveUrl="http://abqtrails.deepdivecoding.com/"
      />
      <ProjectCard
        projectName="use-instagram-feed"
        projectImage={data.instagramPhone.childImageSharp.fixed}
        pageUrl="/projects/use-instagram-feed"
        sourceUrl="https://github.com/will-t-harris/use-instagram-feed"
        npmUrl="https://www.npmjs.com/package/use-instagram-feed"
      />
    </section>
  )
}

export default Projects
