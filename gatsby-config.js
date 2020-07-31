module.exports = {
  siteMetadata: {
    title: `willharris.dev`,
    description: `Will Harris' personal website and blog. A corner of the internet to collect my thoughts about programming, technology, and bicycles.`,
    author: `Will Harris`,
    siteUrl: `https://www.willharris.dev`,
    keywords: ["blog", "javascript"],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-goatcounter`,
      options: {
        code: "willharris",
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-layout`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {},
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    // Sources
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bikes`,
        path: `${__dirname}/src/content/bikes`,
      },
    },
  ],
}
