window.onload = function () {
    let range = document.querySelector('#range');
    let number = document.querySelector('#input_number');
    let diagramGreen = document.querySelector('.diagram__green');
    let diagramRad = document.querySelector('.diagram__red');

    function calculator() {
        let data;
        data = {
            range: function () {
                number.value = range.value;
                this.diagram(range.value);
            },
            number: function () {
                range.value = number.value;
                this.diagram(number.value);
            },
            diagram: function (value) {
                diagramGreen.style.height = value + 'px';

                if (value < 20) {
                    diagramRad.style.height = value * 0.02 + 'px';
                } else if (value < 50) {
                    diagramRad.style.height = value * 0.04 + 'px';
                } else if (value < 75) {
                    diagramRad.style.height = value * 0.06 + 'px';
                } else if (value < 101) {
                    diagramRad.style.height = value * 0.08 + 'px';
                }
            }
        };

        range.addEventListener('input', data.range.bind(data));
        number.addEventListener('input', data.number.bind(data));

    }
    calculator();
};
