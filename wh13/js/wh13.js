window.onload = function () {
    let elements = document.querySelectorAll('form.decor > input');

    let textA = document.getElementsByClassName('textAll');


    setInterval(function () {
            let test = '';

            for (let i = 0, size = elements.length; i < size; i++) {
                if (elements[i].value) {
                    if (i === size - 1) {
                        test += (elements[i].value + '.')
                    } else {
                        test += (elements[i].value + ', ');
                    }
                }
            }
            textA[0].value = test;
        }

        , 3000)

};