/*
В задачу п.2 из лекции добавить 3ий аргумента flag, который является boolean. Если флаг true, тогда при наличии свойства в обоих объектов в результат пойдет значение из первого обьекта, false - из второго.
assignObjects({...}, {...}, false);*/

var object1 = {
    x: 10,
    y: 20,
    z: 30
};
var object2 = {
    x: 40,
    w: 50,
    e: 60
};

function concatenationObject(x, y, flag) {
    var newObject = {};

    function createObj(obj) {
        for (var key in obj) {
            newObject[key] = obj[key];
        }
    }

    if (flag == false) {
        createObj(x);
        createObj(y);
        return newObject;
    }
    if (flag == true) {
        createObj(x);
        createObj(y);
        return newObject;
    }
}

var object = concatenationObject(object1, object2, false);

console.log(object1, 'Обект 1');
console.log(object2, 'Обект 2');
console.log(object, 'Конечный обект');