/*
Создать массив А размерностью n. Заполнить случайными числами любом диапазоне.

    Найти максимальное число и минимальное число.
    Элементы массива между min -- max записать в массив B.*/

let arrSize = +prompt('Введите размер масива', '10');
let arr = [];
let min = 10;
let max = 500;


for (let i = 0; i < arrSize; i++) {
    arr[i] = Math.round(Math.random() * (max - min) + min);
}
let posMin = 0;
let posMax = 0;

for (let i = 0; i < arrSize; i++) {
    if (i === 0){
        var minValue = arr[0];
        var maxValue = arr[0];
    }
    if (minValue > arr[i]){
        minValue = arr[i];
        posMin = i;
    }
    if (maxValue < arr[i]){
        maxValue = arr[i];
        posMax = i;
    }
}


console.log(minValue, 'minValue');
// console.log(posMin, 'posMin');
console.log(maxValue, 'maxValue');
// console.log(posMax, 'posMax')

let arrB = [];


if(posMin < posMax){
    for (let i = posMin; i <= posMax; i++) {
        arrB[arrB.length] = arr[i];
    }
}else{
    for (let i = posMax; i <= posMin; i++) {
        arrB[arrB.length] = arr[i];
    }
}




// for (; posMin < posMax; posMin++) {
//     arrB[arrB.length] = arr[posMin];
// }

// while (posMin < posMax){
//     arrB[arrB.length] = arr[posMin];
//     posMin++
// }
//
// for (; posMax <= posMin; posMax++) {
//     arrB[arrB.length] = arr[posMax];
// }
console.log(arrB, 'final');
console.log(arr, 'raw');


/*let arrSize = +prompt('Введите размер масива', '');

let arr = [];

let min = 10;
let max = 500;

for (let i = 0; i < arrSize; i++) {
    arr[i] = Math.round(Math.random() * (max - min) + min);

}
let minValue = Math.min.apply(null, arr);
console.log(minValue, 'minValue');


let maxValue = Math.max.apply(null, arr);
console.log(maxValue, 'maxValue');

console.log(arr, 'arr');

let arrB = [];

let posMin = arr.indexOf(minValue);
console.log(posMin, 'posMin');

let posMax = arr.indexOf(maxValue);
console.log(posMax, 'posMax');

for (; posMin < posMax; posMin++) {
    arrB[arrB.length] = arr[posMin];
}
for (; posMax <= posMin; posMax++) {
    arrB[arrB.length] = arr[posMax];
}
console.log(arrB, 'arrB');*/


// ------------------альт-----------------


/*while (posMin < posMax) {
    arrB[arrB.length] = arr[posMin];
    posMin++;
}
while (posMin >= posMax) {
    arrB[arrB.length] = arr[posMax];
    posMax++;
}*/


