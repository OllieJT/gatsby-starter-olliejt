const path = require("path")


exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: "graphql-tag/loader",
        },
      ],
    },
  })
}

/*
exports.createPages = async ({ graphql, actions }) => {
  const linkResolver = require("./src/utility/linkResolver")
  const { createPage } = actions

  const prismicData = await graphql(`
    query makePrismicPagesQuery {
      allPrismicProject {
        edges {
          node {
            uid
            type
          }
        }
      }
    }
  `)
  prismicData &&
    prismicData.data.allPrismicProject.edges.forEach(({ node }) => {
      createPage({
        path: linkResolver(node),
        component: path.resolve("./src/templates/project.js"),
        context: {
          uid: node.uid,
        },
      })
    })
}
 */