window.onload = function () {
    let country = document.querySelector('#country');
    let city = document.querySelector('#city');
    let street = document.querySelector('#street');

    async function modernSendAjax() {
        const data = await fetch(`http://localhost:3003/country`);
        const resp = await data.json();
        console.log(resp, 'resp');
        country.innerHTML = addSelect(resp);
    }

    function addSelect(arr) {
        return `${arr.map(item => `<option>${item}</option>`).join(' ')}`
    }

    modernSendAjax();

    country.addEventListener('change', updateIndex);

    async function updateIndex(e) {
        const data = await fetch(`http://localhost:3003/${e.target.selectedIndex}/?index=${e.target.selectedIndex}`);
        const resp = await data.json();
        console.log(resp, 'resp');
        city.innerHTML = addSelect(resp);
    }

    city.addEventListener('change', updateIndexCity);

    async function updateIndexCity(e) {
        const data = await fetch(`http://localhost:3003/street/${e.target.selectedIndex}/?index=${e.target.selectedIndex}`);
        const resp = await data.json();
        console.log(resp, 'resp');
        street.innerHTML = addSelect(resp);
    }

};