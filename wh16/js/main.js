window.onload = function() {


    let button = document.querySelector('.button');
    let counter = document.querySelector('.counter');
    let buttonWrap = document.getElementById('block');



    buttonWrap.addEventListener('click',showClick);

    function showClick(event) {
        let target = event.target;
        console.log(target.dataset.botton);
    }


    let store = {
        setInStore: function (key, value) {
            localStorage.setItem(key, value);
        },
        getFromStore: function (key) {
            return localStorage.getItem(key);
        }
    };

    counter.innerHTML = store.getFromStore('counter') || 0;

    let click = (function (counter) {
        let counterValue = ++counter.innerHTML;

        store.setInStore('counter', counterValue);

    }).bind(null, counter);



    button.addEventListener('click', click);

};