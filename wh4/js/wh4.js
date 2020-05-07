// 1. Создать двумерный массив, заполненный случайными числами в любом диапазоне.
// Найти колонку, где сумма элементов наименьшая.
// Найти колонку, где сумма элементов найбольшая.

var arr = new Array(4);

for (var i = 0, size = arr.length; i < size; i++) {
    arr[i] = new Array(4);

    for (var j = 0; j < size; j++) {
        arr[i][j] = Math.round(Math.random() * 10);
    }
}
console.log(arr, 'arr');

var sumColumn =[];

for (var i = 0, size = arr.length; i < size; i++) {

    for (var j = 0, sum = 0, size = arr.length; j < size; j++) {
        sum += arr[j][i];
        // console.log(sum, 'sum');
    }
    sumColumn[sumColumn.length] = sum;
    if (i == 0) {
        var min = sum;
        var max = sum;
    }
    if (sum > max) {
        max = sum;
    }

    if (sum < min) {
        min = sum;
    }
    // console.log(sum, 'sum');
}
var numberMinColumn = sumColumn.indexOf(min);
var numberMaxColumn = sumColumn.indexOf(max);

// console.log(sumColumn, 'sumColumn');
console.log('Min значение в колонке №', numberMinColumn, 'Min =', min);
console.log('Max значение в колонке №', numberMaxColumn, 'Max =', max);




