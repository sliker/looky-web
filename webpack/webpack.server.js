const { root } = require('./helpers');

// const { AotPlugin } = require('@ngtools/webpack');
const nodeExternals = require('webpack-node-externals');

/**
 * This is a server config which should be merged on top of common config
 */
module.exports = {
  externals: [
    nodeExternals({
      whitelist: [/@angular/, /@ng/]
    })
  ],
  entry: root('./functions/dist-server/main.bundle.js'),
  output: {
    filename: 'main.repack.bundle.js',
    path: root('./functions/dist-server/')
  },
  target: 'node'
};
