function SuperMath() {
    this.check = function (obj) {
        if (confirm('Хотите провести действия с Znak X Y ?') === true) {
            let znak = ['+', '-', '*', '/', '%'];

            for (let i = 0; i < znak.length; i++) {
                if (obj.znak === znak[i]) {
                    return obj.x + znak[i] + obj.y;

            }


        //  else {
        //     p.test();
        //
        // }

    }
}
}


let p = new SuperMath();

SuperMath.prototype.test = function () {
    let nevObj = {};
    nevObj.x = +prompt('Введи число Х', '100');
    nevObj.y = +prompt('Введи число Y', '100');
    nevObj.znak = prompt('Введи знак', '*');

    return p.check(nevObj);

};

let obj = {
    x: 10,
    y: 20,
    znak: '+'
};


let obj1 = {
    x: 10,
    y: 20,
    znak: '-'
};


let obj2 = {
    x: 10,
    y: 20,
    znak: '*'
};


let obj3 = {
    x: 10,
    y: 20,
    znak: '/'
};


let obj4 = {
    x: 21,
    y: 20,
    znak: '%'
};


let obj5 = {
    x: 21,
    y: 20,
    znak: '^'
};

console.log(p.check(obj));
console.log(p.check(obj1));
console.log(p.check(obj2));
console.log(p.check(obj3));
console.log(p.check(obj4));
console.log(p.check(obj5));


// if (confirm('Хотите провести действия с Znak X Y ?') === true) {
//     if (obj.znak === "+") {
//         return obj.x + obj.y;
//     } else if (obj.znak === "-") {
//         return obj.x - obj.y;
//     } else if (obj.znak === "*") {
//         return obj.x * obj.y;
//     } else if (obj.znak === "/") {
//         return obj.x / obj.y;
//     } else if (obj.znak === "%") {
//         return obj.x % obj.y;
//     } else {
//         p.test();
//
//     }
//
// }