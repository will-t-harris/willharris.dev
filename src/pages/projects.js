import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw, { css } from "twin.macro"

import { SEO } from "../components/SEO"
import { ProjectCard } from "../components/ProjectCard"

const Projects = ({ path }) => {
  const data = useStaticQuery(projectsPageQuery)
  console.log(data)
  return (
    <>
      <SEO title="Projects" pathname={path} />
      <section tw="flex flex-col mx-auto w-screen lg:w-900">
        <h1 tw="text-4xl mt-12 mb-10 font-extrabold text-center lg:text-left">
          Projects
        </h1>
        <ProjectCard
          projectName="Northeastern University Fall Fest 2020"
          projectImage={data.fallFest.childImageSharp.fluid}
          builtWith={["React", "TypeScript", "Aphrodite", "Apollo", "Prisma"]}
        />
        <ProjectCard
          projectName="Westloan Locations"
          projectImage={data.westworldLocations.childImageSharp.fluid}
          pageUrl="https://determined-bose-86548e.netlify.app/"
          liveUrl="https://determined-bose-86548e.netlify.app/"
          builtWith={["React", "TypeScript", "Google Maps API", "Sass"]}
        />
        <ProjectCard
          projectName="ABQ Bike Trails"
          projectImage={data.abqBikeTrails.childImageSharp.fluid}
          pageUrl="http://abqtrails.deepdivecoding.com/"
          sourceUrl="https://github.com/abq-outdoor-trails/outdoor-trails-master"
          liveUrl="http://abqtrails.deepdivecoding.com/"
          builtWith={[
            "React",
            "Redux",
            "Bootstrap",
            "Mapbox GL JS",
            "PHP",
            "PHPUnit",
            "MySQL",
          ]}
        />
        <ProjectCard
          projectName="Move With Madeline"
          projectImage={data.moveWithMadeline.childImageSharp.fluid}
          pageUrl="https://movewithmadeline.com"
          sourceUrl="https://github.com/will-t-harris/move-with-madeline"
          liveUrl="https://movewithmadeline.com"
          builtWith={["React", "Gatsby", "Tailwind CSS", "Netlify CMS"]}
        />
        <ProjectCard
          projectName="useInstagramFeed"
          projectImage={data.instagramPhone.childImageSharp.fluid}
          pageUrl="https://www.npmjs.com/package/use-instagram-feed"
          sourceUrl="https://github.com/will-t-harris/use-instagram-feed"
          npmUrl="https://www.npmjs.com/package/use-instagram-feed"
          builtWith={["React"]}
        />
      </section>
    </>
  )
}

export default Projects

const projectsPageQuery = graphql`
  query projectsQuery {
    fallFest: file(
      sourceInstanceName: { eq: "images" }
      name: { eq: "fall-fest-home" }
    ) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    westworldLocations: file(
      sourceInstanceName: { eq: "images" }
      name: { eq: "westworld-locations" }
    ) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    abqBikeTrails: file(
      sourceInstanceName: { eq: "images" }
      name: { eq: "abq-bike-trails" }
    ) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    moveWithMadeline: file(
      sourceInstanceName: { eq: "images" }
      name: { eq: "move-with-madeline" }
    ) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    instagramPhone: file(
      sourceInstanceName: { eq: "images" }
      name: { eq: "instagram-phone" }
    ) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
