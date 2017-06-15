// Used by Karma test

'use strict';

const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = webpackMerge(commonConfig, 
{
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['', '.js', '.ts'],
        modules: [ helpers.root('node_modules') ] ,
        root: helpers.root('app') 
    },

    tslint: {
        emitErrors: true
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
}); 





