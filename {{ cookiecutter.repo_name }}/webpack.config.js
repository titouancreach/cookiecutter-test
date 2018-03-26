const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  resolve: {
    modules: ['node_modules'],
    alias: {
      vue: 'vue/dist/vue.js',
      '@': path.resolve(__dirname, 'app/src')
    }
  },

  entry: {
    '{{cookiecutter.app_code}}': path.resolve(__dirname, 'app/src/')
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
        from: 'app/app.json',
        to: '{{cookiecutter.app_code}}'
      },
      {
        from: 'app/mapdefs/',
        to: '{{cookiecutter.app_code}}/assets/mapdefs'
      },
      {
        from: 'app/placeholders/',
        to: '{{cookiecutter.app_code}}/placeholders'
      },
      {
        from: 'app/logo/',
        to: '{{cookiecutter.app_code}}/assets/logo/'
      },
      {
        from: 'app/data/',
        to: '{{cookiecutter.app_code}}/assets/data/'
      }
    ])
  ]
};
