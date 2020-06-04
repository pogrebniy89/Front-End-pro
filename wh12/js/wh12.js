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
        nArr[marker.x][marker.y] = '&';
        return nArr;
    };

    // this.goTo = function (goToMarker) {
    // }
    //
    // this.shift = function (direction) {
    //
    // }
    // return nArr;
}

SuperArray.prototype.render = function (separator) {
    let sep = [];
    sep.length = 8;
    for (let i = 0, size = sep.length; i < size; i++) {
        sep[i] = separator;
    }

    return console.log(sep.join(''))
};

let arr = new SuperArray(6, 10, {min: 0, max: 100});


console.log(arr.setMarker({x: 2, y: 3}));

arr.render('+');


arr.clear('row', 1);
arr.clear('column', 1);
