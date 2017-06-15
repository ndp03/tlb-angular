var webpack = require('webpack');
var helpers = require('./helpers');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var APP_START = './app';

module.exports = {
  entry: {
    'polyfills': `${APP_START}/polyfills.ts`,
    'vendor': `${APP_START}/vendor.ts`,
    'main': `${APP_START}/main.ts`
  },

  resolve: {
    extensions: ['', '.ts', '.js', '.scss']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract( // this plugin extract the CSS from <style> tag and save into CSS file
          'style-loader', // style-loader loads the CSS into <style> tag
          [
            'css-loader?importLoaders=1&sourceMap', // produce the CSS                        
            'postcss-loader', // Post-process CSS e.g. add prefixes for different browsers. More POST-css plugins can be used "postcss" sectio below.
            'sass-loader?sourceMap', // Process SASS such as nested CSS rules
            'import-glob-loader' // this allows us to use wildcard in SCSS @import e.g. @import "./pages/**/*" 
          ]
        )
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery',
      '_': 'lodash'
    })
  ],

  postcss: [
    require('autoprefixer') // add vendor prefixes        
  ]
};