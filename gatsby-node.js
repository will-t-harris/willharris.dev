const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(`
    query nodeQuery {
      posts: allMdx(
        filter: { frontmatter: { contentCategory: { eq: "post" } } }
      ) {
        nodes {
          frontmatter {
            path
          }
          fields {
            slug
          }
        }
      }
      bikes: allMdx(
        filter: { frontmatter: { contentCategory: { eq: "bike" } } }
      ) {
        nodes {
          frontmatter {
            path
          }
          fields {
            slug
          }
        }
      }
    }
  `)

  const postTemplate = require.resolve("./src/templates/postTemplate.js")
  const bikeTemplate = require.resolve("./src/templates/bikeTemplate.js")

  if (data.error) {
    console.error(`Error during createPages: ${data.error}`)
  }

  data.posts.nodes.forEach((node) => {
    createPage({
      path: `/garden${node.frontmatter.path}`,
      component: postTemplate,
      context: { slug: node.frontmatter.path },
    })
  })

  data.bikes.nodes.forEach((node) => {
    createPage({
      path: `/bike${node.frontmatter.path}`,
      component: bikeTemplate,
      context: { slug: node.frontmatter.path },
    })
  })
}
