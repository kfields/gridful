// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridful',
  plugins: [
    {
      use: '~/plugins/source-contentful',
      options: {
        space: 'qsxce13g8lg3', // required
        accessToken: '3128fab970a4394f425899793c8a6a5d2351721fcc09377533759e4a0211cbd6', // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    }
  ]
}