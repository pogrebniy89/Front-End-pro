window.onload = function () {
    let country = document.querySelector('select');
    console.log(country);

    country.addEventListener('change', function () {
        console.log(this.value);
    });

};