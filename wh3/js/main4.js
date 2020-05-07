/*
Перевернуть массив, т.е. если был массив 1, 5, 6, 2, 4 -- то мы должны получить 4, 2, 6, 5, 1. Нельзя использовать стандартный метод reverse(). Постарайтесь не использовать дополнительный массив.*/

let arr = [1, 2, 3, 4, 5, 6, 7];

let size = arr.length;

console.log(size, 'size');

for (let i = 0; i < size; i++) {
    arr[arr.length] = arr[i];
}
console.log(arr, 'arr');

for (let j = 0, z = arr.length - 1; j <= size; j++, z--) {
    arr[j] = arr[z];
}
arr.length = size;

console.log(arr, 'arrFinal');