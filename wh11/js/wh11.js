function SuperMath() {
    this.check = function (obj) {
        if (confirm('Хотите провести действия с '+ obj.x + ' ' + obj.znak + ' ' + obj.y + ' ?')) {
            if (obj.znak === '+') {
                console.log(this.sum(obj));
            } else if (obj.znak === '-') {
                console.log(this.dif(obj));
            } else if (obj.znak === '*') {
                console.log(this.mul(obj));
            } else if (obj.znak === '/') {
                console.log(this.dev(obj));
            } else if (obj.znak === '%') {
                console.log(this.rem(obj));
            } else {
                console.log('Знак ' + obj.znak + 'не поддержывается');
            }
        } else {
            this.input()
        }
    };
    this.input = function () {
        let nevObj = {};
        nevObj.x = +prompt('Введи число Х', '100');
        nevObj.y = +prompt('Введи число Y', '100');
        nevObj.znak = prompt('Введи знак', '*');

        return this.check(nevObj);

    };
}

let p = new SuperMath();


SuperMath.prototype.sum = function(obj) {
    return obj.x + obj.y
};

SuperMath.prototype.dif = function(obj) {
    return obj.x - obj.y
};

SuperMath.prototype.mul = function(obj) {
    return obj.x * obj.y
};

SuperMath.prototype.dev = function(obj) {
    return obj.x / obj.y
};

SuperMath.prototype.rem = function(obj) {
    return obj.x % obj.y
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

p.check(obj);
p.check(obj1);
p.check(obj2);
p.check(obj3);
p.check(obj4);
