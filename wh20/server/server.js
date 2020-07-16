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

// app.get('/user', function (req, res) {
//     console.log(req.body, 'qqqqq');
//     res.send('okk');
// })
//
//
// app.post('/set-user-info', function (req, res) {
//     const user = req.body;
//     const {login: addLogin, secretKey: addSecretKey} = req.body;
//
//     fs.readFile('./user.json', 'utf8', function (error, data) {
//         const allUser = JSON.parse(data);
//
//         let flag = allUser.some(({login, secretKey}) => login === addLogin && secretKey === addSecretKey);
//
//         if (flag === true) {
//             let userExists = `'Пользователь = '${addLogin}' уже зареистрирован'`;
//             res.status(301).send(userExists);
//         } else {
//             let userExists = `${addLogin}' регистрация прошла успешно'`;
//             allUser.push(user);
//             const jsonAdd = JSON.stringify(allUser);
//
//             fs.writeFile('./user.json', jsonAdd, err => {
//                 if (err) {
//                     console.log('Error writing file', err)
//                 } else {
//                     console.log('Successfully wrote file')
//                 }
//             });
//             res.status(200).send(userExists);
//         }
//     })
// });

app.post('/user-all', function (req, res) {
    const  {login: loginFront, password: passwordFront} = JSON.parse(req.body);
    // console.log(front, 'сервер');

    fs.readFile('./user.json', 'utf8', function (error, data) {
        const allUser = JSON.parse(data);

        const oneUser = allUser.filter(({login, password}) => login === loginFront &&  password === passwordFront);

        if (oneUser.length === 0) {
            let error = 'Not found';
            res.status(401).send(JSON.stringify(error));
        } else {
            let [{id}] = oneUser;
            console.log(id, 'nen==');
            res.status(200).send(JSON.stringify(id));
        }
    });

    // let test = `какойто текст`;
    // res.send('okk');
})

app.post('/user/:id', function (req, res) {
    const  idUser = JSON.parse(req.body);
    console.log(idUser, 'сервер товар');

    let id = 'все ок';
    res.status(200).send(JSON.stringify(id));
})