// Написать функцию заполнения массива. Имя произвольное.
function addArr(arrLength) {
    let arr = [];

    for (let i = 0; i < arrLength; i++) {
        arr[i] = Math.round(Math.random() * 500);
    }
    return arr;
}

//---------------------------------------------------------

let arr = addArr(20);
console.log(arr, 'Масив 1');

let arrN = addArr(20);
console.log(arrN, 'Масив 2');

/*написать функцию, которая примет как аргумент(параметр) два массива и сравнить суммы всех ЧИСЛОВЫХ элементов. Тот массив, сумма которого большая - должен вернутся функцией.*/

function comparisonArr(arr1, arr2) {
    let sum1 = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum1 += arr1[i];
    }
    console.log(sum1, 'Сума чисел масива №1');

    let sum2 = 0;
    for (let j = 0; j < arr2.length; j++) {
        sum2 += arr2[j];
    }
    console.log(sum2, 'Сума чисел масива №2');

    if (sum1 > sum2) {
        return arr1;
    } else {
        return arr2;
    }

}

let maxSumArr = comparisonArr(arr, arrN);

console.log(maxSumArr, 'Конечный масив');

//===================Другой вариант решения==================


// function comparisonArr(arr1, arr2) {
//     let result1 = arr1.reduce(function (sum, current) {
//         return sum + current;
//
//     }, 0);
//     let result2 = arr2.reduce(function (sum, current) {
//         return sum + current;
//
//     }, 0);
//     console.log(result1, 'return1');
//     console.log(result2, 'return2');
//
//     if (result1 > result2) {
//         return arr1;
//     } else {
//         return arr2;
//     }
// }
//
// let maxSumArr = comparisonArr(arr, arrN);
// console.log(maxSumArr, 'Конечный масив');
