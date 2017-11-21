const webpack = require('webpack');
const merge = require('webpack-merge');
const app = require('./webpack.common.js');

module.exports = merge(app, {
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
});
