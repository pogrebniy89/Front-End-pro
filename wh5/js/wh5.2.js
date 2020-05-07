/*
Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 обьекта и возвращает новый, который состоит из свойство обоих обьектов (склеить). Если свойство повторяется, то взять значение второго обьекта

assignObjects({ x: 10, y: 20 }, { z: 30 }) -> { x:10, y:20, z: 30 }

assignObjects({ x: 10 }, { x: 20, y: 30 }) - > { x:20, y: 30 }*/

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

function concatenationObject(x, y) {
    var newObject = {};
    for (var key in x) {
        newObject[key] = x[key];
    }
    for (var key in y) {
        newObject[key] = y[key];
    }
    return newObject;
}

var object = concatenationObject(object1, object2);

console.log(object);