window.onload = function () {

    function counter() {
        // let button = document.querySelector('.button');
        let counter = document.querySelectorAll('.counter');
        let buttonWrap = document.getElementById('block');
        console.dir(counter);
        console.log(counter[0].dataset.counter, 'counter')

        let data;
        data = {
            setInStore: function (key, value) {
                localStorage.setItem(key, value);
            },
            getFromStore: function (key) {
                return localStorage.getItem(key);
            },
            click: function (count) {

                for (let i = 0; i < counter.length; i++ ) {
                    if(count === counter[i].dataset.counter) {
                        console.log(counter[i].dataset.counter, 'тут');
                        let value = null;
                        value = this.getFromStore(count) || 0;
                        value++;
                        counter[i].innerHTML = value;
                        this.setInStore(count, value);
                    }

                }

            },
            showClick: function (event) {
                let target = event.target;
                this.click(target.dataset.botton);
                this.counterInner();
            },
            counterInner: function () {

                for (let i = 0; i < counter.length; i++ ) {
                    let valueHTML = null;
                    valueHTML = this.getFromStore(counter[i].dataset.counter) || 0;
                    counter[i].innerHTML = valueHTML;
                }

                // let dat = dataset.counter.one;
                // console.log(dat,'dat');
                // value.counter.innerHTML = this.getFromStore(value.counter) || 0;
            }
        }
        // counter.innerHTML = store.getFromStore('counter') || 0;
        // button.addEventListener('click', click);
        buttonWrap.addEventListener('click', data.showClick.bind(data));
        document.addEventListener('DOMContentLoaded',data.counterInner.bind(data));
        // buttonWrap.addEventListener('click', data.counterInner.bind(data));
    }

    counter()

    //======================================


    // let button = document.querySelector('.button');
    // let counter = document.querySelector('.counter');
    // let buttonWrap = document.getElementById('block');
    //
    //
    // buttonWrap.addEventListener('click', showClick);
    //
    // function showClick(event) {
    //     let target = event.target;
    //     console.log(target.dataset.botton);
    // }
    //
    //
    // let store = {
    //     setInStore: function (key, value) {
    //         localStorage.setItem(key, value);
    //     },
    //     getFromStore: function (key) {
    //         return localStorage.getItem(key);
    //     }
    // };
    //
    // counter.innerHTML = store.getFromStore('counter') || 0;
    //
    // let click = (function (counter) {
    //     let counterValue = ++counter.innerHTML;
    //
    //     store.setInStore('counter', counterValue);
    //
    // }).bind(null, counter);
    //
    //
    // button.addEventListener('click', click);
//
};