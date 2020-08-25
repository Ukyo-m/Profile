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
    locale: `ja_JP`,
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
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mash!ko`,
        short_name: `mash!ko`,
        start_url: `/`,
        background: `#FFFFFF`,
        theme_color: `#FBFDF0`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
  ],
}
