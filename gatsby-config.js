/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `mash!ko`,
    description: `mash!koのサイト`,
    lang: `ja`,
    siteUrl: `https://youthful-saha-994ac6.netlify.app/`,
    locale: `ja_JP`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    `gatsby-plugin-react-helmet`,
  ],
}
