window.onload = function () {

    function counter() {
        let button = document.querySelector('.button');
        let counter = document.querySelector('.counter');
        let buttonWrap = document.getElementById('block');

        let data;
        data = {
            setInStore: function (key, value) {
                localStorage.setItem(key, value);
            },
            getFromStore: function (key) {
                return localStorage.getItem(key);
            },
            click: (function (counter) {
                console.log(counter, 'click');
                let counterValue = ++counter.innerHTML;

                this.setInStore([counter], counterValue);

            }).bind(null, counter),
            showClick: function (event) {
                let target = event.target;
                console.dir(target.dataset.botton);
                this.click(target.dataset.botton);
                this.counterInner(target.dataset.botton);
            },
            counterInner: function (value) {
                value.innerHTML = this.getFromStore([value]) || 0;
            }
        }
        // counter.innerHTML = store.getFromStore('counter') || 0;
        // button.addEventListener('click', click);
        buttonWrap.addEventListener('click', data.showClick.bind(data));
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