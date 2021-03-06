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

app.post('/user-all', function (req, res) {
    const {login: loginFront, password: passwordFront} = JSON.parse(req.body);

    fs.readFile('./user.json', 'utf8', function (error, data) {
        const allUser = JSON.parse(data);

        const oneUser = allUser.filter(({login, password}) => login === loginFront && password === passwordFront);

        if (oneUser.length === 0) {
            let error = 'Not found';
            res.status(401).send(JSON.stringify(error));
        } else {
            let [{id}] = oneUser;
            console.log(id, 'nen==');
            res.status(200).send(JSON.stringify(id));
        }
    });
});

app.post('/user/:id', function (req, res) {
    const idUser = JSON.parse(req.body);

    fs.readFile(`goods/user-${idUser}.json`, 'utf8', function (error, data) {
            console.log(data);
            res.status(200).send(data);
    });
});