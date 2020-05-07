/*
Заполнить массив А случайными числами (диазпазон на ваше усмотрение). Заменить каждый элемент массива с нечетным индексом на ноль.*/

let arrSize = +prompt('Укажы размер масива', '');

let arr = [];
let min = -1000;
let max = 1000;

for (let i = 0, size = arrSize; i < size; i++) {
    arr[i] = Math.round(Math.random() * (max - min) + min);
}
console.log(arr, 'arr');

for (let j = 0, size = arrSize; j < size; j++) {
    if (j % 2) {
        arr[j] = 0;
    }
}

console.log(arr, 'arr');



