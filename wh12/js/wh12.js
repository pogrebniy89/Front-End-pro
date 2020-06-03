function SuperArray(n, m, option) {
    let nArr = new Array(n);

    for (let i = 0, size = nArr.length; i < size; i++) {
        nArr[i] = new Array(m);

        for (let j = 0, len = nArr[i].length; j < len; j++) {
            nArr[i][j] = Math.round(Math.random() * (option.max - option.min) + option.min);
        }
    }


    // this.clear = function (direction, k) {
    //
    // }
    //
    this.setMarker = function (marker) {
        nArr[marker.x][marker.y] = '&';
        return console.log(nArr);
    }
    //
    // this.goTo = function ({}) {
    //
    // }
    //
    // this.shift = function (direction) {
    //
    // }
    return nArr;
}

SuperArray.prototype.render = function (separator) {

}

let arr = new SuperArray(5,6,{min: 0, max: 100});

console.log(arr);

arr.setMarker({x: 2, y: 3})

