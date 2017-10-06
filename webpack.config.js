module.exports = require('./webpack/webpack.server');

/* const ngtools = require('@ngtools/webpack');
const webpackMerge = require('webpack-merge');

const commonPartial = require('./webpack/webpack.common');
const serverPartial = require('./webpack/webpack.server');
const { getAotPlugin } = require('./webpack/webpack.aot');

module.exports = function(options, webpackOptions) {
  options = options || {};

  if (options.aot) {
    console.log(`Running build for server with AoT Compilation`)
  }

  const serverConfig = webpackMerge({}, commonPartial, serverPartial, {
    plugins: [
      getAotPlugin('server', !!options.aot)
    ]
  });

  const configs = [];
  if (!options.aot) {
    configs.push(serverConfig);
  } else if (options.server) {
    configs.push(serverConfig);
  }

  return configs;
}; */
