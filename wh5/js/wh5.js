/*
Сделайте функцию inArray('hello', ['svnj', 'hello', 'cvpoq']), которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.*/

var arr = ['Значение1', 'Значение2', 'Значение3', 'Значение3'];
var searchElement = prompt('Введи елемкнт для поиска', 'Значение3');
var result = searchElementArr(searchElement, arr);

function searchElementArr(searchElement, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (searchElement == arr[i]) {
            return true;
        }
    }
    return false;
}

console.log(result, 'result');