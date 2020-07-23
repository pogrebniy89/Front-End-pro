window.onload = function () {
    let country = document.querySelector('select');
    console.log(country);
    console.dir(country);

    country.addEventListener('change', function () {
        this.selectedIndex;
    });

    // country.addEventListener('change', i.bind(null, this.selectedIndex));

    function i(ind) {
        console.log(ind);
        // return ind
    }


    async function modernSendAjax() {
        const data = await fetch('http://localhost:3003/country');
        const resp = await data.json();
        console.log(resp, 'resp');
        country.innerHTML = await addSelect(resp);
        await country.addEventListener('change', function () {
            // return this.selectedIndex;
            fetch('http://localhost:3003/`${this.selectedIndex}`');
        });
    }

    function addSelect(arr) {
        return `${arr.map(item => `<option>${item}</option>`).join(' ')}`
    }

    modernSendAjax();


};