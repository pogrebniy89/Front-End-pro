/*
Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak. В переменной знак может быть: +, -, *, /, %, ^. Вывести результат математического действия, указанного в переменной znak.*/

function doMath(x, znak, y) {
    let value;
    switch (znak) {
        case '+':
            value = x + y;
            break;
        case '-':
            value = x - y;
            break;
        case '*':
            value = x * y;
            break;
        case '/':
            value = x / y;
            break;
        case '%':
            value = x % y;
            break;
        case '^':
            value = x ** y;
            break;
    }
    return value;
}

let sum = doMath(10, '+', 5);
console.log(sum, 'Додавання');

let sub = doMath(10, '-', 5);
console.log(sub, 'Віднімння');

let mult = doMath(10, '*', 5);
console.log(mult, 'Множення');

let div = doMath(10, '/', 5);
console.log(div, 'Ділення');

let rest = doMath(11, '%', 5);
console.log(rest, 'Залишок від ділення');

let degree = doMath(10, '^', 5);
console.log(degree, 'Підне́сення до сте́пеня');