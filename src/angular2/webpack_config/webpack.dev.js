// For running app with webpack-dev-server
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var serveStatic = require('serve-static');
var stubWebApi = require('../web_api_stub');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var APP_START = './app';

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('dev-dist'), // `dev-dist` is not written to file system, but kept in memory of Webpack dev server
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    // This plugin automatically adds the CSS `<link>` and JS `<script>` into the `index.html` file
    new webpack.optimize.CommonsChunkPlugin({
      // order in array does matters: 0 - commons, 1 - vendors
       names: ['vendor', 'polyfills'],
      minChunks : Infinity
    }),
    new HtmlWebpackPlugin({
      template: `${APP_START}/index.html`
    }),
    new ExtractTextPlugin("[name].css")
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    inline: true, // enable automatic refresh when file change happens
    content_base: helpers.root('app'), // root for webpack dev server
    port: 8080, // => localhost:8080/
    setup: function(app) {
       app.use('/static-library', serveStatic(helpers.root('some_modules/ui-library')));
       stubWebApi(app); // route: /api      
    }
  }
});