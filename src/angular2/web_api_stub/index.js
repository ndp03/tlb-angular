var bodyParser = require('body-parser'),
    compression = require('compression'),
    configureRoutes = require('./routes.js');

module.exports = function webApiStub(app) {

    configureRoutes(app, getApiMiddleWare());

    function getApiMiddleWare() {
        return [compression(), bodyParser.json(), noCache, cors, jsonHeader, logRequest];
    }

    function noCache(req, res, next) {
        res.header("Cache-Control", "no-store, must-revalidate, no-cache, max-age=0");
        res.header("Expires", "Mon, 01 Jan 1990 00:00:00 GMT");
        res.header("Pragma", "no-cache");
        next();
    }

    function cors(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        next();
    }

    function jsonHeader(req, res, next) {
        res.header("Content-Type", "application/json");
        next();
    }

    function logRequest(req, res, next) {
        next();
    }
};