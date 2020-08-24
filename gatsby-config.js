/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config = require('./config/site');

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
          options: {
              name: `images`,
              path: `${__dirname}/src/images`,
          },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto:400,500,700', 'Material+Icons', 'Noto+Sans', 'Noto+Sans+JP']
        },
      }
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: 'GraphCMS',
        fieldName: `gcms`,
        url: `https://api-ap-northeast-1.graphcms.com/v2/ckd55w41a590m01zbh8wwbl4i/master`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-material-ui',
    "gatsby-plugin-styled-components",
  ],
}
