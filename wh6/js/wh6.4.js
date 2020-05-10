/*напиши функцию filter, которая принимает функцию-предикат и массив. Возвращает она массив значений, для которых предикат вернет true.*/

let input = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function isEven(x) {
    return x % 2 == 0;
}


function filter(callback, arr) {
    let arrN = [];
    for (let i = 0; i < arr.length; i++) {
        if (isEven(arr[i]) === true) {
            arrN[arrN.length] = arr[i];
        }
    }
    return arrN;
}

let arrF = filter(isEven(), input);

console.log(arrF, 'Конечный масив');