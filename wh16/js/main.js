window.onload = function() {


    let button = document.querySelector('.button');
    let counter = document.querySelector('.counter');

    let store = {
        setInStore: function (key, value) {
            localStorage.setItem(key, value);
        },
        getFromStore: function (key) {
            return localStorage.getItem(key);
        }
    };

    counter.innerHTML = store.getFromStore('counter') || 0;

    var click = (function (counter) {
        let counterValue = ++counter.innerHTML;

        store.setInStore('counter', counterValue);

    }).bind(null, counter);


    button.addEventListener('click', click);

};