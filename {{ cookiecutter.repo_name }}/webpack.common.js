const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  resolve: {
    modules: ['node_modules', '{{cookiecutter.app_code}}/src'],
    alias: {
      vue: 'vue/dist/vue.js',
      '@': 'components'
    }
  },

  entry: {
    '{{cookiecutter.app_code}}': path.resolve(__dirname, '{{cookiecutter.app_code}}/src/')
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
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name]/assets/css/[name]-style.css'),
    new CopyWebpackPlugin([
      {
        from: '{{cookiecutter.app_code}}/app.json',
        to: '{{cookiecutter.app_code}}'
      },
      {
        from: '{{cookiecutter.app_code}}/mapdefs/',
        to: '{{cookiecutter.app_code}}/assets/mapdefs'
      },
      {
        from: '{{cookiecutter.app_code}}/placeholders/',
        to: '{{cookiecutter.app_code}}/placeholders'
      },
      {
        from: '{{cookiecutter.app_code}}/logo/',
        to: '{{cookiecutter.app_code}}/assets/logo/'
      },
      {
        from: '{{cookiecutter.app_code}}/data/',
        to: '{{cookiecutter.app_code}}/assets/data/'
      }
    ])
  ]
};
