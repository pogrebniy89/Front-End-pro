window.onload = function () {
    let elements = document.querySelectorAll('form.decor > input');

    let textA = document.getElementsByClassName('textAll');


    setInterval(function () {
            let test = '';
            let size = elements.length - 1;

            for (let i = 0; i < size; i++) {
                if (elements[i].value) {
                    test += (elements[i].value + ', ');
                }
            }
            test += (elements[size].value + '.');
            textA[0].value = test;
        }

        , 3000)

};