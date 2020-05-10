/*
Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом.
'func("hello world", ['l', 'd'])' вернет нам "heo wor"*/

let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';

function filerText(str, symbol1, symbol2) {
    let arr = str.split('');
    let arrF = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== symbol1 && arr[i] !== symbol2) {
            arrF[arrF.length] = arr[i];
        }
    }
    return arrF.join('');
}

let textF = filerText(text, "i", "o");

console.log(textF, 'Строка на выходе');


// let arr = text.split('');
// console.log(arr, 'Разделеный масив');
//
// let str = arr.join('');
// console.log(str, 'Масив в строку');