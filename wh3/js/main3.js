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

let minValue;
let maxValue;

for (let i = 0; i < arrSize; i++) {
    if (i === 0){
        minValue = arr[0];
        maxValue = arr[0];
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

console.log(minValue, 'Минимальное значение');
console.log(maxValue, 'Максимальное значение');

let arrB = [];
let start;
let stop;

if (posMin < posMax){
    start = posMin;
    stop = posMax;
} else {
    start = posMax;
    stop = posMin;
}

for (let i = start; i <= stop; i++){
    arrB[arrB.length] = arr[i];
}

console.log(arrB, 'Финальныкй масив');
console.log(arr, 'Начальный масив');

// =================== Вариант без дополнительныз преременных, но с 2 щиклами.

/*let arrB = [];


if(posMin < posMax){
    for (let i = posMin; i <= posMax; i++) {
        arrB[arrB.length] = arr[i];
    }
}else{
    for (let i = posMax; i <= posMin; i++) {
        arrB[arrB.length] = arr[i];
    }
}

console.log(arrB, 'Финальныкй масив');
console.log(arr, 'Начальный масив');*/
























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


