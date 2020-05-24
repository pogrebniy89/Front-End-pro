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

function sliderInit(size) {
    return  {
        size: size,
        counter: 0,
        value: 0,
        up() {
            this.counter++;
            return this;
        },
        down() {
            this.counter--;
            return this;
        },
        set(set) {
            this.value = set;
            return this;
        },
        check() {
            if (this.value < 0 || this.value > size) {
                console.log('значение за предалами диапазона');
                this.value = 0;
                return this.counter;
            } else if (this.value > 0 && this.value <= size){
                this.counter = this.value;
            }


            if (this.counter > 0 && this.counter <= size) {
                return this.counter;
            } else if (this.counter > size) {
                this.counter = 0;
                return this.counter;
            } else if (this.counter < 0) {
                this.counter = size;
                return this.counter;
            } else if (this.counter === 0) {
                return this.counter;
            }
        }
    };
}


let counter = sliderInit(5);


console.log(counter.up().check());
console.log(counter.up().check());
console.log(counter.up().check());
console.log(counter.up().check());
console.log(counter.up().check());
console.log(counter.up().check());
console.log(counter.up().check());
console.log(counter.up().check());
console.log(counter.up().check());
console.log(counter.up().check());
console.log(counter.up().check());
console.log(counter.up().check());
console.log(counter.up().check());
console.log(counter.up().check());

console.log(counter.set(4).check());
console.log(counter.set(5).check());
console.log(counter.set(6).check());
console.log(counter.set(-1).check());

console.log(counter.down().check());
console.log(counter.down().check());
console.log(counter.down().check());
console.log(counter.down().check());
console.log(counter.down().check());
console.log(counter.down().check());


console.log('---------------------');
let counter1 = sliderInit(10);
console.log(counter1.up().check());
console.log(counter1.up().check());
console.log(counter1.up().check());
console.log(counter1.up().check());
console.log(counter1.up().check());
console.log(counter1.up().check());
console.log(counter1.up().check());
console.log(counter1.up().check());
console.log(counter1.up().check());
console.log(counter1.up().check());
console.log(counter1.up().check());

