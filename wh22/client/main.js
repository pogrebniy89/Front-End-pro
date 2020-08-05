window.onload = function () {
    let country = document.querySelector('#country');
    let city = document.querySelector('#city');
    let street = document.querySelector('#street');
    let all = document.querySelector('#all');

    async function modernSendAjax() {
        const data = await fetch(`http://localhost:3003/country`);
        const resp = await data.json();
        country.innerHTML = addSelect(resp);
    }

    function addSelect(arr) {
        return `${arr.map(value => `<option value="${Object.keys(value)}">${Object.values(value)}</option>`).join(' ')}`
    }

    modernSendAjax();

    country.addEventListener('change', updateIndex);

    async function updateIndex(e) {
        const data = await fetch(`http://localhost:3003/${e.target.value}/?index=${e.target.value}`);
        const resp = await data.json();
        console.log(resp, 'resp');
        city.innerHTML = addSelect(resp);
    }

    city.addEventListener('change', updateIndexCity);

    async function updateIndexCity(e) {
        const data = await fetch(`http://localhost:3003/street/${e.target.value}/?index=${e.target.value}`);
        const resp = await data.json();
        console.log(resp, 'resp');
        street.innerHTML = addSelect(resp);
    }

    street.addEventListener('change', allInfo);
    async function allInfo(e) {
        let count = country.options.value;
        console.dir(country);
        all.innerHTML = country;
    }

};