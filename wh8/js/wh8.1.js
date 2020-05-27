// в обьекте data существует метод addRecord, 
//     который аргументами получает любой набор объектов. 
//     Метод addRecord добавляет все свойства переданных объектов в data.
//
//     data = {
//     addRecord: function(){},
//     p: 600,
//     str: 'hello',
//     y: -50
// }
// data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});
// data.x // 50
// data.y // 20
// data.z // 30
// data.p // 600
// data.str // 'hello'
// В метод addRecord добавляется последний необязательный 
// аргумент flag, который указывает приоритет присвоения свойств 
// с одинаковым названием. Если true - берется свойство из первоначального 
// объекта this, если false - берется свойство из 
// arguments. По умолчанию flag = false;

let data = {
    addRecord: function (obj, flag = false) {

        for (let i = 0; i < arguments.length; i++) {

            for (let key in arguments[i]) {

                if (flag === true) {

                    if (!(this.hasOwnProperty([key]))) {
                        this[key] = arguments[i][key];
                    }

                } else if (flag === false) {
                    this[key] = arguments[i][key];
                }
            }

        }
        return this
    }
};

function printOutput(kay, result){
    console.log(kay+" : "+result)
}

data.addRecord({x: 10});
data.addRecord({y: 20},false, {q: 20}, {x: 100});
data.addRecord({x: 20}, true, {c: 100}, {x: 5}, {test: "text"});

printOutput("ключь x", data.x);
printOutput("ключь y", data.y);
printOutput("ключь c", data.c);
printOutput("ключь test", data.test);

