// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

require('dotenv').config()

module.exports = {
  siteName: 'Gridful',
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
  ]
}