module.exports = {
  siteMetadata: {
    title: `willharris.dev`,
    description: `Will Harris' personal website and blog. A corner of the internet to collect my thoughts about programming, technology, and bicycles.`,
    author: `Will Harris`,
    siteUrl: `https://www.willharris.dev`,
    keywords: ["blog", "javascript"],
  },
  plugins: [
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
