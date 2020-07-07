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
    });

    function click(i) {
        let block = getParent(this, '.block');
        let counter = block.querySelector('.counter');
        let counterValue = ++counter.innerHTML;
        store.setInStore('counter-' + i, counterValue); // counter - 2
    }

    function clearAllCounter(index) {
        store.setInStore('counter-' + index, 0);

        return updateCounter(index);
    }

    function getID() {
        let id = prompt('Введите ID', 'counter-1');

        block.forEach((item, index) => {
            if (block[index].dataset.counter === id) {

                return setCounter(id, index);
            }
        });
    }

    function setCounter(id, index) {
        let value = +prompt('Введите число', '100');
        store.setInStore(id, value);

        return updateCounter(index);
    }

    function updateCounter(index) {
        getParent(block[index], '.block')
            .querySelector('.counter').innerHTML = store.getFromStore('counter-' + index);
    }

    set.addEventListener('click', getID);

    function getParent(node, parentSelector) {
        return node.closest(parentSelector);
    }

};
