// Написать функцию initSlider(size),
// которая вернет функционал предоставляющий
// возможность увеличевать или уменьшать счетчик.
//
// Передусмотреть валидацию: если счетчик стал равен size,
// то сбросить его на 0. Если счетчик равен 0,
// то установить его на size.
//
// Предусмотреть возможность сброса счетчика на 0.
//
// Предусмотреть возможность установки произвольного
// значения "n" счетчика, где n > 0, и n <= size, в случае установки
// значения n которое не прошло валидацию выдать в консоль ошибку.

let slider;

slider = {
    counter: 0,
    up() {
        this.counter++;
        return this
    },
    down() {
        this.counter--;
        return this
    },
    set(value) {
        this.counter = value;
        return this
    },
    initSlider(size) {
    if (this.counter >= 0 && this.counter <= size) {
        return this.counter;
    } else if (this.counter < 0 || this.counter >= size) {
        console.log('значение за предалами диапазона');
        this.counter = 0;
        return this.counter;

    }
}
};



// let count = slider.initSlider(5);

console.log(slider.up().initSlider(5));
console.log(slider.up().initSlider(5));
console.log(slider.up().initSlider(5));
console.log(slider.up().initSlider(5));
console.log(slider.up().initSlider(5));
console.log(slider.up().initSlider(5));
console.log(slider.up().initSlider(5));
console.log(slider.up().initSlider(5));



// function initSlider(size) {
//     let counter = 0;
//
//     if (counter >= 0 && counter <= size) {
//         return counter;
//     } else if (counter < 0 || counter >= size) {
//         console.log('значение за предалами диапазона');
//         counter = 0;
//         return counter;
//
//     }
//
// }
//
//     let obj = {
//
//         up: function () {
//             this.counter++;
//             return this.counter;
//         },
//         down: function () {
//             this.counter--;
//             return this.counter;
//         },
//         set: function (value) {
//             this.counter = value;
//             return this.counter;
//         }
//     };
//
//
//
// let count = new initSlider(5);
//
//
// console.log(count.up());
// console.log(count.up());
// console.log(count.up());
// console.log(count.up());
// console.log(count.up());
// console.log(count.up());
// console.log(count.up());
// console.log(count.up());
// console.log(count.down());
// console.log(count.down());
// console.log(count.set(0));
// console.log(count.down());
// console.log(count.down());
// console.log(count.down());
// console.log(count.down());
// console.log(count.down());
// console.log(count.down());
// console.log(count.down());
// console.log(count.down());
// console.log(count.set(1));
// console.log(count.set(3));
// console.log(count.set(5));
// console.log(count.set(6));
// console.log(count.set(4));
// console.log(count.set(2));
// console.log(count.set(-5));
// console.log(count.set(2));
// console.log(count.set(8));
// console.log(count.set(1));
// console.log(count.set(33));
//
// let count1 = new initSlider(10);
//
// console.log(count1.up(),'счетчик 2');
// console.log(count1.up(),'счетчик 2');
// console.log(count1.up(),'счетчик 2');
// console.log(count1.up(),'счетчик 2');
// console.log(count1.up());
// console.log(count1.up());
// console.log(count1.up());
// console.log(count1.up());
// console.log(count1.up());
// console.log(count1.up());
// console.log(count1.down());
// console.log(count1.down());
// console.log(count1.set(0));
// console.log(count1.down());
// console.log(count1.down());
// console.log(count1.down());
// console.log(count1.down());
// console.log(count1.down());
// console.log(count1.down());
// console.log(count1.down());
// console.log(count1.down());
// console.log(count1.set(1));
// console.log(count1.set(3));
// console.log(count1.set(5));
// console.log(count1.set(6));
// console.log(count1.set(4));
// console.log(count1.set(2));
// console.log(count1.set(-5));
// console.log(count1.set(2));
// console.log(count1.set(8));
// console.log(count1.set(1));
// console.log(count1.set(33));