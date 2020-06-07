// # Практика
// 1) Создать класс `new SuperArray(n, m, { min: 10, max: 55 })`,
//     который создаст массив размерностью `n на m` и заполнит случайными
// числами в диапазоне `options.min - options.max`.
//     Массив сохраняется в екземпляр класса `SuperArray`.
//
// 2) Создать метод `render(separator)`, в прототипе. Который выведет
// двумерный массив в документ. С разделителем `separator`, под массивом.
//
// 3) Создать метод `clear(direction, k)`, где `direction` может быть `"row"`
// или `"column"`, а `k` - номер строки или столбца, который нужно очистить.
// (поставить 0)
//
// 4) Создать Метод `setMarker({ x: 6, y: 9 })`, который устанавливает маркер
//     `"&"` в в переданную точку.
//
// 5) Создать метод `goTo({ x: 2, y: 4  })`, маркер передвигается в
// указанную точку.
//
// 6) Создать метод `shift(direction)`, где `direction` может иметь значение
//     `"left", "right", "top", "bottom"`, и маркер сдвинется в указанную
// сторону на 1 шаг.
// ================================================================


function SuperArray(n, m, option) {
    let nArr = new Array(n);

    for (let i = 0, size = nArr.length; i < size; i++) {
        nArr[i] = new Array(m);

        for (let j = 0, len = nArr[i].length; j < len; j++) {
            nArr[i][j] = Math.round(Math.random() * (option.max - option.min) + option.min);
        }
    }


    this.clear = function (direction, k) {
        if (direction === 'row') {
            for (let j = 0, len = nArr[0].length; j < len; j++) {
                nArr[k][j] = 0;
            }

            return nArr
        }

        if (direction === 'column') {
            for (let i = 0, size = nArr.length; i < size; i++) {
                nArr[i][k] = 0;
            }
            return nArr
        }
    };

    this.setMarker = function (marker) {

        nArr[marker.x][marker.y] = nArr[marker.x][marker.y] + '&';
        return nArr;
    };

    this.goTo = function (marker) {
        for (let i = 0, size = nArr.length; i < size; i++) {

            for (let j = 0, len = nArr[i].length; j < len; j++) {
                nArr[i][j] = parseInt(nArr[i][j]);
            }
        }
        this.setMarker(marker);
    }

    this.shift = function (direction) {
        for (let i = 0, size = nArr.length; i < size; i++) {

            for (let j = 0, len = nArr[i].length; j < len; j++) {
                if (typeof (nArr[i][j]) == "string") {
                    nArr[i][j] = parseInt(nArr[i][j]);
                    if (direction === 'up') {
                        let up = --i;
                        if (up === -1) {
                            nArr[++i][j] = nArr[++i][j] + '&';
                            return nArr;
                        } else {
                            nArr[up][j] = nArr[up][j] + '&';
                            return nArr;
                        }
                    } else if (direction === 'down'){
                        let down = ++i;
                        if (down < nArr.length){
                            nArr[down][j] = nArr[down][j] + '&';
                            return nArr;
                        } else {
                            nArr[--down][j] = nArr[--down][j] + '&';
                            return nArr;
                        }

                    } else if (direction === 'left'){
                        let left = --j
                        if (left === -1){
                            nArr[i][++j] = nArr[i][++j] + '&';
                            return nArr;
                        } else {
                            nArr[i][left] = nArr[i][left] + '&';
                            return nArr;
                        }

                    } else if (direction === 'right'){
                        let right = ++j;
                        if (right < nArr[0].length){
                            nArr[i][right] = nArr[i][right] + '&';
                            return nArr;
                        }else {
                            nArr[i][--right] = nArr[i][--right] + '&';
                            return nArr;
                        }

                    }
                }

            }
        }
    }

}

SuperArray.prototype.render = function (separator) {
    let sep = [];
    sep.length = 8;
    for (let i = 0, size = sep.length; i < size; i++) {
        sep[i] = separator;
    }

    return console.log(sep.join(''))
};

let arr = new SuperArray(8, 6, {min: 0, max: 100});


console.log(arr.setMarker({x: 5, y: 5}));
arr.goTo({x: 0, y: 0});
arr.goTo({x: 4, y: 4});
arr.shift('down');
arr.shift('right');

arr.shift('right');

arr.shift('right');

arr.shift('right');

arr.shift('right');
arr.shift('right');
arr.shift('right');
arr.shift('right');
arr.shift('left');
arr.shift('up');
arr.shift('up');


arr.render('+');


arr.clear('row', 1);
arr.clear('column', 1);

