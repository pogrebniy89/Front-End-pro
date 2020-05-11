// Функция должна вернуть массив из центральных элементов переданных массивов.
//     Центральный элемент, это один центральный, если массив по длине непарный [1, 2, 3, 4, 5] -> 3
// Центральный элемент, это пара центральных, если массив по длине парный: [1, 2, 3, 4, 5, 6] -> 3, 4
// Т.е: передам 5 ты массивов мне вернётся массив из всех центральных, передам 10 тоже только 10ти
// // Помните - что ф-я должна быть чистой, и делать только одно действие.

function addArr(arrSize) {
    let arr = [];
    for (let i = 0; i < arrSize; i++) {
        arr[arr.length] = Math.round(Math.random() * 100);
    }
    return arr;
}


let arr1 = addArr(10);
console.log(arr1, 'Масив 1');

let arr2 = addArr(11);
console.log(arr2, 'Масив 2');

let arr3 = addArr(12);
console.log(arr3, 'Масив 3');

let arr4 = addArr(13);
console.log(arr4, 'Масив 4');

let arr5 = addArr(14);
console.log(arr5, 'Масив 5');
console.log(arr1.length, 'длина масива');


function centerElementArr(arr, arrN) {
    let finalArr = [];
    for (let i = 0; i < arguments.length; i++) {
        let iteratedArr = arguments[i];
        let position = Math.ceil(iteratedArr.length / 2) - 1;
        let count = iteratedArr.length % 2 ? 1 : 2;

        for (let j = 0; j < count; j++, position++) {
            finalArr[finalArr.length] = iteratedArr[position];
        }
    }
    return finalArr;
}


let final = centerElementArr(arr1, arr2, arr3, arr4);
console.log(final, 'Результат');


// let position = Math.ceil(arr2.length / 2) - 1;
// let count = arr2.length % 2 ? 1 : 2;
//
// console.log(position, count);
