/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Le meilleur plan climat du monde',
    titleTemplate: '%s · Le meilleur plan climat du monde',
    description: '<indsæt>',
    url: 'https://lemeilleurplanclimatdumonde.fr', // No trailing slash allowed!
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-57NCBWB',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      },
    },
  ],
};
