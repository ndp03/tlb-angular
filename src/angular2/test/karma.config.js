'use strict';

// reference: 
// https://semaphoreci.com/community/tutorials/setting-up-angular-2-with-webpack
// https://github.com/preboot/angular2-webpack

var ENV = process.env.npm_lifecycle_event;
var isDebugging = ENV === 'test-debug'; //

module.exports = (config) => {
    config.set({
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,        

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        browserNoActivityTimeout: 50000,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        // PhantomJS is a healdless browser, used by the build server
        // Chrome is a normal browser, used in dev environment for debugging test
        browsers: isDebugging ? ['Chrome'] : ['PhantomJS'],

        // list of files / patterns to load in the browser
        files: [
            { pattern: './karma.entry.js', watched: false }
        ],

         // list of files to exclude
        exclude: [],
              
        logLevel: config.LOG_INFO,

        phantomJsLauncher: {
            exitOnResourceError: true
        },

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            './karma.entry.js': ['webpack', 'sourcemap']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress', 'mocha'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha'],

        webpack: require('../webpack_config/webpack.test'),

        webpackServer: {
            noInfo: true // please don't spam the console when running in karma!
        },

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,
    });
};