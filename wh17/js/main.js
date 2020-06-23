window.onload = function () {
    var buttons = document.querySelectorAll('.button');
    var clear = document.querySelector('.clear');
    var set = document.querySelector('.set');

    var store = {
        setInStore(key, value) {
            localStorage.setItem(key, value);
        },
        getFromStore(key) {
            return localStorage.getItem(key);
        }
    };

    function setSpan(i) {
        getParent(buttons[i], '.block')
            .querySelector('.counter').innerHTML = store.getFromStore('counter-' + i);
    }

    for (var i = 0; i < buttons.length; i++) {
        setSpan(i);
        buttons[i].addEventListener('click', click.bind(buttons[i], i));
        clear.addEventListener('click', clearAllCounter.bind(buttons[i], i));
    }

    function click(i) {
        var block = getParent(this, '.block');
        var counter = block.querySelector('.counter');
        var counterValue = ++counter.innerHTML;
        store.setInStore('counter-' + i, counterValue); // counter - 2
    }

    function clearAllCounter(i) {
        store.setInStore('counter-' + i, 0);
        setSpan(i);
    }

    function getParent(node, parentSelector) {
        return node.closest(parentSelector);
    }


    // function clearAllCounter()
    // {
    //     for (var i = 0; i < buttons.length; i++) {
    //         store.setInStore('counter-' + i, 0);
    //     }
    // }
    // clear.addEventListener('click', clearAllCounter);
    //
    // function setValueId()
    // {
    //
    // }
}
