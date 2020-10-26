import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw from "twin.macro"

import { SEO } from "../components/SEO"
import { BikeCard } from "../components/BikeCard"

const Bikes = ({ path }) => {
  const data = useStaticQuery(graphql`
    query bikesImageQuery {
      LHT: imageSharp(
        fixed: { originalName: { eq: "long-haul-trucker.jpg" } }
      ) {
        fixed(width: 400, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
      trek990: imageSharp(
        fixed: { originalName: { eq: "trek-990-troll-fork.jpg" } }
      ) {
        fixed(width: 400, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
      konaUnit: imageSharp(
        fixed: { originalName: { eq: "kona-unit-01.jpg" } }
      ) {
        fixed(width: 400, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
      surlyKrampus: imageSharp(fixed: { originalName: { eq: "krampus.jpg" } }) {
        fixed(width: 400, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
      surlyPackRat: imageSharp(
        fixed: { originalName: { eq: "surly-pack-rat.jpg" } }
      ) {
        fixed(width: 400, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Bikes" pathname={path} />
      <section tw="flex flex-col mx-auto mb-8 w-64 lg:w-full">
        <h1 tw="text-4xl mt-40 mb-10 font-extrabold lg:text-center">
          My (Current) Bike Herd
        </h1>
        <div tw="flex flex-col justify-around  rounded-lg lg:grid lg:grid-cols-4 lg:w-full lg:gap-4">
          <BikeCard
            twClasses={tw`lg:col-start-2`}
            path="/bikes/surly-long-haul-trucker"
            title="2012 Surly Long Haul Trucker"
            image={data.LHT.fixed}
          />
          <BikeCard
            twClasses={tw`lg:col-start-3`}
            path="/bikes/1995-trek-990"
            title="1995 Trek 990"
            image={data.trek990.fixed}
          />
          <BikeCard
            twClasses={tw`lg:col-start-2 lg:row-start-2`}
            path="/bikes/2015-kona-unit"
            title="2015 Kona Unit"
            image={data.konaUnit.fixed}
          />
        </div>
      </section>
    </>
  )
}

export default Bikes
