// Inside of build.js:
const {injectManifest} = require('workbox-build');

class GridsomeSEO {
  static defaultOptions () {
    return {
      "globDirectory": "dist/",
      "globPatterns": [
        "**/*.{html,css,js,png,svg,json}"
      ],
      "swDest": "dist/sw.js",
      "swSrc": "src/pwa/worker.js",
      //"importWorkboxFrom": 'local'
    }
  }

  constructor (api, options, context) {
    this.options = options
    console.log('plugin-workbox')
    //console.log(api)
    console.log('options')
    console.log(options)
    console.log('context')
    console.log(context)
    api.afterBuild(this.afterBuild.bind(this))
  
  }
  /**
   * Called when plugins are run.
   */
  apply () {}

  /**
   * Called after config has been resolved
   * and before any plugins are applied.
   */
  async init () {}

  /**
   * Create custom GrapQL root queries.
   * @param  {Store} options.store
   * @return {Object}
   */
  async createSchemaQueries ({ store }) {}

  /**
   * Called after all bootstrap phases.
   */
  async afterBootstrap () {}

  /**
   * Chain webpack config.
   * @param  {ChainedMap} config
   * @param  {String}     options.context
   * @param  {Boolean}    options.isProd
   * @param  {Boolean}    options.isServer
   */
  chainWebpack (config, { context, isProd, isServer }) {}

  /**
   * Called before query data is rendered.
   * @param  {String} options.context
   * @param  {Object} options.config
   * @param  {Array}  options.queue
   */
  async beforeRenderQueries ({ context, config, queue }) {}

  /**
   * Called before static HTML is rendered.
   * @param  {String} options.context
   * @param  {Object} options.config
   * @param  {Array}  options.queue
   */
  async beforeRenderHTML ({ context, config, queue }) {
    /*
    console.log('gridsome-seo')
    console.log('context')
    console.log(context)
    // console.log('config')
    // console.log(config)
    console.log('queue')
    console.log(queue)
    */
  }

  /**
   * Called before build.
   * @param  {String} options.context
   * @param  {Object} options.config
   */
  async beforeBuild ({ context, config }) {}

  /**
   * Called after build.
   * @param  {String} options.context
   * @param  {Object} options.config
   */
  async afterBuild ({ context, config }) {
    const { swDest } = this.options
    injectManifest(this.options).then(({count, size}) => {
      console.log(`Generated ${swDest}, which will precache ${count} files, totaling ${size} bytes.`);
    });    
  }
}


module.exports = GridsomeSEO