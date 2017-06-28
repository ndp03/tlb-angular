module.exports = function configureRoutes(app) {
    app.get('/mockApi', function (req, res) {
        res.send('Mock data service');
    });

    app.get('/mockApi/employeelist', function (req, res) {
        var mockData = require('./responseStubs.json');
        res.send(JSON.stringify(mockData.employeeList));
    });

    app.get('/mockApi/security/sms/number', function (req, res) {
        res.send(JSON.stringify("XXXXXXX123"));
    });

    app.get('/mockApi/security/sms/generate', function(req, res) {
        res.send(JSON.stringify({
            status : "Success"
        }));
    })

    app.post('/mockApi/abc', function(req, res) {
        res.json({
            status : "Valid"
        });
    });

    app.get('/mockApi/account/getBankNames/:bsb', function(req, res) {
        res.json("ANZ");
    });

    app.post('/mockApi/selfservice/approveCobRequest', function(req, res) {
        res.json({
            succeeded: true,
        });
    });

}