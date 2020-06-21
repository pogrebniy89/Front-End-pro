window.onload = function () {
    let counter1 = document.querySelectorAll('.counter');

    function get() {
        for (let i = 0; i < counter1.length; i++) {
            counter1[i].innerHTML = localStorage.getItem(counter1[i].dataset.counter);
        }
    }

    get()

    function counter() {
        let counter = document.querySelectorAll('.counter');
        let buttonWrap = document.getElementById('block');

        let data;
        data = {
            setInStore: function (key, value) {
                localStorage.setItem(key, value);
            },
            getFromStore: function (key) {
                return localStorage.getItem(key);
            },
            click: function (count) {

                for (let i = 0; i < counter.length; i++) {
                    if (count === 'ClearCounters') {
                        console.log('ClearCounters');
                        console.log(counter[i].dataset.counter);
                        counter[i].innerHTML = 0;
                        this.setInStore(counter[i].dataset.counter, 0);

                    } else if (count === counter[i].dataset.counter) {
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
            },
        }
        buttonWrap.addEventListener('click', data.showClick.bind(data));
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