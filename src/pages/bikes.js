import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw, { css } from "twin.macro"

import { BikeCard } from "../components/BikeCard"

const Bikes = () => {
  const data = useStaticQuery(graphql`
    query bikesImageQuery {
      LHT: imageSharp(
        fixed: { originalName: { eq: "long-haul-trucker.jpg" } }
      ) {
        fixed(width: 160, height: 160) {
          ...GatsbyImageSharpFixed
        }
      }
      trek990: imageSharp(
        fixed: { originalName: { eq: "trek-990-troll-fork.jpg" } }
      ) {
        fixed(width: 160, height: 160) {
          ...GatsbyImageSharpFixed
        }
      }
      konaUnit: imageSharp(
        fixed: { originalName: { eq: "kona-unit-01.jpg" } }
      ) {
        fixed(width: 160, height: 160) {
          ...GatsbyImageSharpFixed
        }
      }
      surlyKrampus: imageSharp(fixed: { originalName: { eq: "krampus.jpg" } }) {
        fixed(width: 160, height: 160) {
          ...GatsbyImageSharpFixed
        }
      }
      surlyPackRat: imageSharp(
        fixed: { originalName: { eq: "surly-pack-rat.jpg" } }
      ) {
        fixed(width: 160, height: 160) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)
  return (
    <section
      tw="flex flex-col mx-auto lg:mx-auto w-64 lg:w-600"
      css={[
        css`
          font-family: Inter;
        `,
      ]}
    >
      <h1 tw="text-4xl mt-16 mb-10 font-extrabold">My (Current) Bike Herd</h1>
      <div tw="flex flex-col justify-around border border-b-0 rounded-lg">
        <BikeCard
          path="/bikes/surly-long-haul-trucker"
          title="2012 Surly Long Haul Trucker"
          image={data.LHT.fixed}
          keywords={["Touring,", "Steel,", "700c"]}
        />
        <BikeCard
          path="/bikes/1995-trek-990"
          title="1995 Trek 990"
          image={data.trek990.fixed}
          keywords={["MTB", "Rigid", "Steel", '26"']}
        />
        <BikeCard
          path="/bikes/2015-kona-unit"
          title="2015 Kona Unit"
          image={data.konaUnit.fixed}
          keywords={["MTB", "Rigid", "Steel", "Singlespeed", '29"']}
        />
        <BikeCard
          path="/bikes/2018-surly-krampus"
          title="2018 Surly Krampus"
          image={data.surlyKrampus.fixed}
          keywords={["MTB", "Rigid", "Steel", '29"', "Plus"]}
        />
        <BikeCard
          path="/bikes/2019-surly-pack-rat"
          title="2019 Surly Pack Rat"
          image={data.surlyPackRat.fixed}
          keywords={["Light Touring", "Steel", "Porteur", "650b"]}
        />
      </div>
    </section>
  )
}

export default Bikes
