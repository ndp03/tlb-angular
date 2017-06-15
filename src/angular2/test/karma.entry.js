require('core-js/es6');
require('core-js/client/shim');
require('core-js/es7/reflect');

require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/sync-test');
require('zone.js/dist/proxy');
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');

require('@angular/core');
require('@angular/common');
require('@angular/http');
require('@angular/router');

// RxJS
require('rxjs/Rx');

require('../app/mock-app-tracking');

window.apiBasePath = '/mockApi/';

// These two lines are the ones that start pulling in our .spec.ts files from our src directory. 
// The .context method comes from Webpack. The second parameter tells Webpack to look in subdirectories for more files.
const context = require.context('./unit', true, /\.spec\.ts$/);

// We'll use the context we created just like we'd use a regular require statement. 
// This context also has a map of all the files it found where each key is the name of a file found. 
// Hence, by running .forEach over the array of keys and calling function for each, 
// we read in each of those .spec.ts files and, as a result, any code those tests require to run.
context.keys().forEach(context);

// We'll make sure that we get full stack traces 
// when we have a problem and that Jasmine uses two seconds as its default timeout
Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

// The first two are libraries we'll need for testing provided by Angular. 
// They will let us set the base Angular providers we'll need to run our application. 
// Then, we'll use those imported libraries to set up the base test providers.
const browser = require('@angular/platform-browser-dynamic/testing');
const testing = require('@angular/core/testing');

testing.TestBed.resetTestEnvironment();
testing.TestBed.initTestEnvironment(
    browser.BrowserDynamicTestingModule,
    browser.platformBrowserDynamicTesting()
);
