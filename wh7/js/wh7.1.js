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
    value: 0,
    up() {
        this.counter++;
        return this
    },
    down() {
        this.counter--;
        return this
    },
    set(set) {
        this.value = set;
        return this
    },
    initSlider(size) {

        if (this.value < 0 || this.value > size) {
            console.log('значение за предалами диапазона');
            this.value = 0;
            return this.counter;
        } else {
            if (this.counter > 0 && this.counter <= size) {
                return this.counter;
            } else if (this.counter > size) {
                this.counter = 0;
                return this.counter;
            } else if (this.counter <= 0) {
                this.counter = size;
                return this.counter;
            }
        }

    }
};


console.log(slider.up().initSlider(5));
console.log(slider.up().initSlider(5));
console.log(slider.set(10).initSlider(5));
console.log(slider.set(-1).initSlider(5));
console.log(slider.up().initSlider(5));
console.log(slider.up().initSlider(5));
console.log(slider.up().initSlider(5));
console.log(slider.up().initSlider(5));
console.log(slider.down().initSlider(5));
console.log(slider.down().initSlider(5));
console.log(slider.down().initSlider(5));
console.log(slider.down().initSlider(5));
console.log(slider.down().initSlider(5));
console.log(slider.down().initSlider(5));
console.log(slider.down().initSlider(5));
console.log(slider.down().initSlider(5));

