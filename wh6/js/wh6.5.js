/*
Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом.
'func("hello world", ['l', 'd'])' вернет нам "heo wor"*/

let text = 'Lorem ipsum dolor sit amet, consectetur';
let arrS = ['i', 'o', 's'];

function filerText(str, arrSymbol) {
    let arr = str.split('');
    let arrF = [];

    for (let i = 0; i < arr.length; i++) {
        if (arrSymbol.includes(arr[i])) {
            console.log(arr[i], 'символ совпал')
        } else {
            arrF[arrF.length] = arr[i];
        }
    }
    return arrF.join('');
}

let textF = filerText(text, arrS);

console.log(textF, 'Строка на выходе');


// let arr = text.split('');
// console.log(arr, 'Разделеный масив');
//
// let str = arr.join('');
// console.log(str, 'Масив в строку');
//
// arr.includes(item, from) – ищет item, начиная с
// индекса from, и возвращает true, если поиск успешен.