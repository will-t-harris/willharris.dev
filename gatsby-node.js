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
      allMdx {
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

  if (data.error) {
    console.error(`DANGER DANGER, something went wrong`)
  }

  data.allMdx.nodes.forEach((node) => {
    if (node.fields.slug) {
      createPage({
        path: `/garden${node.frontmatter.path}`,
        component: postTemplate,
        context: { slug: node.frontmatter.path },
      })
    }
  })
}
