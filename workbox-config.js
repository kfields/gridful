module.exports = {
  "globDirectory": "dist/",
  "globPatterns": [
    "**/*.{html,css,js,png,svg,json}"
  ],
  "swDest": "dist/sw.js",
  "swSrc": "./src/pwa/worker.js"
};