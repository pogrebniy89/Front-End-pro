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

var objekt3 = {
    g: 1,
    h: 2,
    j: 3
};

function concatenationObject(x, y) {
    var newObject = {};

    function createObj(obj) {
        for (var key in obj) {
            newObject[key] = obj[key];
        }
    }

    for (let i = 0; i <= arguments.length; i++){
        let value = arguments[i];
        createObj(value);
    }
    return newObject;
}

var object = concatenationObject(object1, object2, objekt3);

console.log(object);