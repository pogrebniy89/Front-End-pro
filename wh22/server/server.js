var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const port = 3003;

app.listen(port, function () {
    console.log(`Example app listening on port http://localhost:${port}/`);
});

//------------------------------------------- end config ---------------------------

app.get('/country', function (req, res) {
    console.log('server row 28');

    fs.readFile(`country/country.json`, 'utf8', function (error, data) {
        console.log(data);
        res.status(200).send(data);
    });
});

app.get('/:id', function (req, res) {
    console.log('server row 37');

    fs.readFile(`city/:id.json`, 'utf8', function (error, data) {
        console.log(data);
        res.status(200).send(data);
    });
})