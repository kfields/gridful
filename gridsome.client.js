// Client API makes it possible to hook into various parts of Gridsome
// on the client-side and ???
// Learn more: https://gridsome.org/docs/client-api

// This file is loaded on the server and in the browser as default
// Note: This file runs before main.js

/**
 * @param Vue                 Vue instance
 * @param options             Plugin options
 * @param context.appOptions  Options for the Vue instance
 * @param context.router      The router instance
 * @param context.head        VueMeta info objet
 * @param context.isClient
 * @param context.isServer
 */
export default function (Vue, options, context) {
  console.log('gridsome.client.js')
  console.log('options')
  console.log(options)
  console.log('context')
  console.log(context)
}
