/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config = require("./data/siteConfig")

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `mash!ko`,
    description: `mash!koのサイト`,
    lang: `ja`,
    siteUrl: `https://www.mashiko.work/`,
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
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-microcms`,
      options: {
        apiKey: "58139d26-90ad-447f-8641-702321b9c698",
        serviceId: "mashiko",
        endpoint: "blog",
        query: {
          limit: 100,
        },
      },
    },
    {
      resolve: `gatsby-source-microcms`,
      options: {
        apiKey: "58139d26-90ad-447f-8641-702321b9c698",
        serviceId: "mashiko",
        endpoint: "category",
        query: {
          limit: 100,
        },
      },
    },
  ],
}
