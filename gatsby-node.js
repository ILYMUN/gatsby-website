const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const plainPageTemplate = path.resolve(`./src/templates/plain-page.jsx`);
  const result = await graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                type
                path
                title
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create pages from markdown
  result.data.allMarkdownRemark.edges.forEach(edge => {
    const page = edge.node;

    switch (page.frontmatter.type) {
      case "default":
        createPage({
          path: page.frontmatter.path,
          component: plainPageTemplate,
          context: {}
        });
        break;
      case "plain":
        createPage({
          path: page.frontmatter.path,
          component: plainPageTemplate,
          context: {}
        });
        break;
    }
  });

  // createPage({
  //   path: '/current-conference',
  //   component: path.resolve(`./src/pages/current-conference.jsx`),
  //   context: {}
  // });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};

const webpack = require('webpack');
exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions
}) => {
  actions.setWebpackConfig({
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ]
  });
};
