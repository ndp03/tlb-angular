module.exports = function configureRoutes(app) {
    app.get('/mockApi', function (req, res) {
        res.send('Mock data service');
    });

    app.get('/mockApi/stocks/:id', function (req, res) {

        var id = req.param('id');
        var mockData = require('./responseStubs.json');

        switch (id) {

            case '500':
                // simulate 500 Internal Server Error
                res.status(500).send();
                break;

            case 'flaky':
                // simulate flaky backend
                const num = Math.round(Math.random() * 10);

                if (num % 2 === 0) {
                    res.send(JSON.stringify(mockData.getStocks["aus-banks"]));
                } else {
                    res.status(500).send();
                }
                break;

            case 'timeout':
                // simulate timeout period. Wait 10 seconds before returning the values.
                setTimeout(function () {
                    res.send(JSON.stringify(mockData.getStocks["aus-banks"]));
                }, 10000);
                break;

            case 'delay':
                // simulate delay. Delay 3 seconds before returning the values.
                setTimeout(function () {
                    res.send(JSON.stringify(mockData.getStocks["aus-banks"]));
                }, 2000);
                break;     

            default:
                // simulate success
                res.send(JSON.stringify(mockData.getStocks[id]));
                break;
        }
    });

    // Note : change the status to see different page
    app.get('/mockApi/security/twofactorauthenticationstatus', function (req, res) {
        var result = {
            "requireTwoFactorAuthentication": false,
            "status": {
                //"status":"AuthenticateViaSmsOrSecurityQuestions",
                //"status":"RegisterForSecurityQuestions",
                //"status":"RegisterForSms",
                //"status":"AuthenticateViaSms",
                "status":"AuthenticateViaSecurityQuestions",
                //"status":"AuthenticateViaSmsOrSecurityQuestions",
                //"status":"ContactCso",
                "description": "Not in use"
            }
        };
        res.send(JSON.stringify(result));
    });
    
    // 2FA - Cms call
    app.get('/mockApi/cms/twofactorauthentication', function (req, res) {
        var mockData = require('./responseStubs.json');
        res.send(JSON.stringify(mockData.cmsTwofa));
    });

    // 2FA - Step Up SMS 
    app.get('/mockApi/security/sms/number', function (req, res) {
        res.send(JSON.stringify("XXXXXXX123"));
    });

    app.get('/mockApi/security/sms/generate', function(req, res) {
        res.send(JSON.stringify({
            status : "Success"
        }));
    })

    app.post('/mockApi/security/sms/verify', function(req, res) {
        res.json({
            status : "Valid"
        });
    });

    // 2FA - Q&A 
    app.get('/mockApi/security/securityquestion/request', function(req, res) {
        res.json({
            status : "Success",
            questions : [
                {
                    questionId : 1,
                    question : 'Question 1'  
                },
                {
                    questionId : 2,
                    question : 'Question 2'  
                }
            ]
        });
    })

    app.post('/mockApi/security/securityquestion/verify', function(req, res) {
        res.json({
            status : "Valid"
        });
    })

    // 2FA - Reset Q&A
    app.get('/mockApi/security/securityquestion/predefined', function(req, res) {
        res.json([
            'question 1', 'question 2', 'question 3', 'question 4'
        ]);
    })
    
    app.post('/mockApi/security/securityquestion/reset', function(req, res) {
        res.json({
            status : "Success"
        });
    })

    // 2FA - Register Mobile 
    app.get('/mockApi/customer/mobile', function(req, res) {
        var mockData = require('./responseStubs.json');
        res.send(JSON.stringify(mockData.twofaRegisterMobile));
    });

    app.get('/mockApi/security/sms/register', function (req, res) {
        res.send(JSON.stringify({
            status : "Success"
        }));
    });

    // COB - Cms
    app.get('/mockApi/cms/changeofbank', function (req, res) {
        var mockData = require('./responseStubs.json');
        res.send(JSON.stringify(mockData.cmsCob));
    });

    // COB - Settlement Account Selection
    app.get('/mockApi/customer/accounts', function(req, res) {
        var mockData = require('./responseStubs.json');
        res.send(JSON.stringify(mockData.cobTradingAccountSelection));
    });

    // COB - Trading Account Selection
    app.get('/mockApi/account/eligibleSettlementaccounts', function(req, res) {
        var mockData = require('./responseStubs.json');
        res.send(JSON.stringify(mockData.cobSettlementAccountSelectionEligibleSettlementAccounts));
    });

    // COB - New OFI
    app.get('/mockApi/account/getBankNames/:bsb', function(req, res) {
        res.json("ANZ");
    });

    // COB - Review
    app.post('/mockApi/account/changeofbank', function(req, res){
        res.json({"isSuccessful":true,"referenceNumber":"117","timestamp":"11:44, 09 May 2017","status":"Pending Approval","approvers":[{"clientId":94453033,"status":"Initiated Request","title":"MR","firstName":"OLYMPUS","middleName":"","lastName":"MULTIACCOUNTCOB","modifiedDate":"11:44, 09 May 2017"}]});
    });

    // COB - Check Status page
    app.get('/mockApi/selfservice/getCobRequestStatus', function(req, res) {
        var mockData = require('./responseStubs.json');
        res.send(JSON.stringify(mockData.cobCheckStatus));
    });
    
    app.post('/mockApi/selfservice/approveCobRequest', function(req, res) {
        res.json({
            succeeded: true,
        });
    });

    // HUB - User Details
    app.get('/mockApi/customer/userDetails', function(req, res) {
        var mockData = require('./responseStubs.json');
        res.send(JSON.stringify(mockData.userDetails));
    });

    app.get('/mockApi/account/userStatus', function(req, res) {
        var mockData = require('./responseStubs.json');
        res.send(JSON.stringify(mockData.userStatusList));
    });

     // HUB - Cms
    app.get('/mockApi/cms/hub', function (req, res) {
        var mockData = require('./responseStubs.json');
        res.send(JSON.stringify(mockData.cmsHub));
    });

     // HUB - Status Centre
    app.get('/mockApi/selfservice/getstatuscentredata', function (req, res) {
        var mockData = require('./responseStubs.json');
        res.send(JSON.stringify(mockData.statusCentre));
    });

      // HUB - Status Centre
    app.get('/mockApi/selfservice/status', function (req, res) {
        var mockData = require('./responseStubs.json');
        res.send(JSON.stringify(mockData.checkStatus));
    });
}