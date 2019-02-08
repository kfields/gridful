// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const dotenv = require('dotenv')
if(process.env.NODE_ENV === 'production') {
  dotenv.config({path:'./env/prod/.env'})
} else {
  dotenv.config({path:'./env/dev/.env'})
}

const path = require('path')
const nodeExternals = require('webpack-node-externals')

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
    },
    {
      use: '~/plugins/plugin-workbox',
      options: {
        "globDirectory": "dist/",
        "globPatterns": [
          "**/*.{html,css,js,png,svg,json}"
        ],
        "swDest": "dist/sw.js",
        "swSrc": "src/pwa/worker.js"
      }
    }
  ],
  chainWebpack(config, options) {
    const { isServer, isProd } = options
    // console.log(config)
    console.log('chainWebpack options')
    console.log(options)
    config
      .plugin('env')
      .use(require.resolve('webpack/lib/EnvironmentPlugin'), [{ 'GRIDFUL_CONTACTHOOK': undefined, 'NODE_ENV': 'development' }]);

    /*config.module
      .rule('load-fonts')
      .test(/\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/)
      .use('file-loader')
      .loader("file-loader")
      .options(
        {
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
      )*/

    if (isServer) {
      config.externals([nodeExternals({ whitelist: [/^vue-awesome/, /^buefy/] })])
      /*      
      const {InjectManifest} = require('workbox-webpack-plugin');
      config
      .plugin('workbox')
      .use(new InjectManifest({
        swSrc: './src/pwa/worker.js',
        swDest: './pwa/worker.js',
      }))
      */
      const WebpackPwaManifest = require('webpack-pwa-manifest')
      config
      .plugin('pwa-manifest')
      .use(new WebpackPwaManifest({
        name: 'Gridful Blog',
        short_name: 'Gridful',
        description: 'Gridful = Gridsome + Contentful!',
        start_url: '.',
        background_color: '#ffffff',
        theme_color: '#355e3b',
        crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
        fingerprints: false,
        icons: [
          {
            src: path.resolve('./src/favicon.png'),
            sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
          }/*,
          {
            src: path.resolve('src/assets/large-icon.png'),
            size: '1024x1024' // you can also use the specifications pattern
          }*/
        ]
      }))
    }
  }
}