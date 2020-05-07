/*
Заполнить массив размерностью n значениями с клавиатуры. Если введенное значение пользователя не число, или отрицательное значение, то запросить повторный ввод данных.*/

var n = +prompt('Укажы размер масива', '5');
var arr = new Array(n);
var size = arr.length;
var i = 0;

do {
    var value = prompt('Введи число > 0', '');
    if (value >= 0) {
        arr[i] = (value);
    } else if (value < 0) {
        alert('Введите число больше 0');
    } else if (isNaN(value)) {
        alert('Мы работаем только с числами');
    }
    i++
} while (i < size);

console.log(arr, 'arr');
console.log('Ниже альтернативний скрипт');

//------------- альтернатива ----------------
/*
var n = +prompt('Укажы размер масива', '5');
var arr = new Array(n);
var size = arr.length;

for (var i = 0, size = arr.length; i < size; i++) {
    let value = prompt('Введи число > 0', '');
    if (value >= 0) {
        arr[i] = (value);
    } else if (value < 0) {
        alert('Введите число больше 0');
    } else if (isNaN(value)) {
        alert('Мы работаем только с числами');
    }
}
*/




//----------------------------------------------------------------
// let arrN = [];
//
//
// while (true) {
//
//     let value = prompt('Введи число', '');
//
//     if (value === "" || value === null) break;
//
//     if (value >= 0) {
//         arrN[arrN.length] = value;
//     } else if (value < 0) {
//         alert('Введите число больше 0');
//     } else if (isNaN(value)) {
//         alert('Мы работаем только с числами');
//     }
//
// }
// console.log(arrN, 'arrN');
//
