var express = require('express');
var https = require('https');

var router = express.Router();

router.post('/register', async (req, res) => {
    // Log user out of the application
    console.log(req.body)

    //The url we want is `www.nodejitsu.com:1337/`
    var options = {
        host: 'www.deutsche-familienversicherung.de',
        port: 443,
        path: '/fileadmin/media/fake/api2/api.php?query=' + req.body.query + '&dfvVnr=' + req.body.dfvVnr + '&product=' + req.body.product,
        //This is what changes the request to a POST request
        method: 'POST'
    };

    callback = function (response) {
        var str = ''
        response.on('data', function (chunk) {
            str += chunk;
        });

        response.on('end', function () {
            console.log(str);
            res.status(201).send(str);
        });
    }

    var req = https.request(options, callback);

    //req.write("hello world!");
    req.end();
})

module.exports = router;
