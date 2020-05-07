/*------------- level 2 -----------------*/
/*
Организовать циклический ввод с клавиатуры элементов, которые будут добавляться к существующему массиву A = [1,2,3] в конец. Предусмотреть символ прекращения ввода «&»*/

// let a = [1, 2, 3];
//
// while (true) {
//     let value = prompt('Начинаем заполнять масив, толо не вводи "&"', '');
//
//     if (value === '&') break;
//
//     a[a.length] = value;
//
// }
// console.log(a, 'a');






/*---------- В двумерном массиве A размером n(рядов) на m(столбцов). Заполнить случайными числами. -----------*/

let arr = [];

arr.length = +prompt('Введите количесво рядов масива', '3');

let column = +prompt('Введите количесво колоно масива', '5');

console.log(arr, 'arr');
// -------- заполняем масива рандомными числами------------------
for (let i = 0, size = arr.length; i < size; i++) {
    arr[i] = new Array(column);

    for (let j = 0; j < column; j++) {
        arr[i][j] = Math.round(Math.random() * 100);


    }
}

let result = [];
// -------------- Находим сумму елементов ряда.-------------------
for (let i = 0, size = arr.length; i < size; i++) {
    result[result.length] = arr[i].reduce(function (sum, current) {
        return sum + current;
    }, 0);

}

//-------------- Ниходим значения min max --------------

let max = Math.max.apply(null, result);

let min = Math.min.apply(null,result);


let minRowValue = result.indexOf(min);
console.log(min, 'minValue', minRowValue, 'rowMinValue');

let maxRowValue = result.indexOf(max);
console.log(max, 'maxValue', maxRowValue, 'rowMaxValue');




//--------------Меняем max i min рады местами

let buffer = arr[minRowValue];
arr[minRowValue] = arr[maxRowValue];
arr[maxRowValue] = buffer;

console.log(arr, 'reverse min max');
