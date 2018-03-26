const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  resolve: {
    modules: ['node_modules'],
    alias: {
      vue: 'vue/dist/vue.js',
      '@': path.resolve(__dirname, 'test_app/src')
    }
  },

  entry: {
    'test_app': path.resolve(__dirname, 'test_app/src/')
  },

  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name]/assets/js/[name]-bundle.js',
    library: '[name]',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },

  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name]/assets/css/[name]-style.css'),
    new CopyWebpackPlugin([
      {
        from: 'test_app/app.json',
        to: 'test_app'
      },
      {
        from: 'test_app/mapdefs/',
        to: 'test_app/assets/mapdefs'
      },
      {
        from: 'test_app/placeholders/',
        to: 'test_app/placeholders'
      },
      {
        from: 'test_app/logo/',
        to: 'test_app/assets/logo/'
      },
      {
        from: 'test_app/data/',
        to: 'test_app/assets/data/'
      }
    ])
  ]
};
