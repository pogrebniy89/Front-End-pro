window.onload = function () {
    let buttons = document.querySelectorAll('.button');
    let clear = document.querySelector('.clear');
    let set = document.querySelector('.set');
    let block = document.querySelectorAll('.block');

    let store = {
        setInStore(key, value) {
            localStorage.setItem(key, value);
        },
        getFromStore(key) {
            return localStorage.getItem(key);
        }
    };

    buttons.forEach((item, index) => {
        getParent(buttons[index], '.block')
            .querySelector('.counter').innerHTML = store.getFromStore('counter-' + index);
        buttons[index].addEventListener('click', click.bind(buttons[index], index));
        clear.addEventListener('click', clearAllCounter.bind(null, index));
    });

    block.forEach((item, index) => {
        block[index].setAttribute('data-counter', `counter-${[index]}`);
        console.log(block[index].dataset.counter);
        block[index].addEventListener('click', showClick);
    });

    function click(i) {
        let block = getParent(this, '.block');
        let counter = block.querySelector('.counter');
        let counterValue = ++counter.innerHTML;
        store.setInStore('counter-' + i, counterValue); // counter - 2
    }

    function clearAllCounter(i) {
        store.setInStore('counter-' + i, 0);
    }

    // console.log(buttons[1].dataset.);
    // function setCounter() {
    //     let count = prompt('установить счетчик', 'counter-1');
    //
    // }

    function setCounter() {
        let count = prompt('установить счетчик', 'counter-1');
        let keys = Object.keys(localStorage);
        for (let key of keys) {
            if (key === count) {
                let val = +prompt('установить значение', '100');
                if (Number.isInteger(val)) {
                    store.setInStore(count, val);
                }
            }
        }
    }


    set.addEventListener('click', setCounter);

    function getParent(node, parentSelector) {
        return node.closest(parentSelector);
    }

    function showClick(event) {
        let target = event.target;
        this.click(target.dataset.botton);
        console.log(this, 'showClick');
    }

    // block.addEventListener('click', showClick);

};
