// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

require('dotenv').config()

module.exports = {
  siteName: 'Gridful',
  siteUrl: 'https://gridful.netlify.com',
  siteDescription: 'Gridsome + Contentful + Love',
  plugins: [
    {
      use: '~/plugins/source-contentful',
      options: {
        space: process.env.CONTENTFUL_SPACE, // required
        accessToken: process.env.CONTENTFUL_TOKEN, // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful',
        routes: {
          "ContentfulBlogPost": '/blog/:slug'
        }
      }
    }
  ],
  chainWebpack (config) {
    // console.log(config)
    config
    .plugin('env')
    .use(require.resolve('webpack/lib/EnvironmentPlugin'), [{ 'GRIDFUL_CONTACTHOOK': undefined }]);
  }
}