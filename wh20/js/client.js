const listGoods = document.querySelector('.goods');
const form = document.querySelectorAll('form');

function sendAjax({url, method, success, data}) {
    const xhttp = new XMLHttpRequest();

    xhttp.addEventListener('load', function ({target}) {
        const resp = target.response;
        success(resp);
    });

    xhttp.open(method, url);
    xhttp.send(JSON.stringify(data));
}

form.forEach(form => {
    form.addEventListener('click', submit)
});

function submit(event) {
    event.preventDefault();
    const target = event.target;

    if (target.tagName.toLowerCase() === 'button') {
        const requestPayload = prepareForm(this);
        sendAjax({
            url: 'http://localhost:3003/user-all',
            method: 'POST',
            data: requestPayload,
            success(data) {
                nextStep(JSON.parse(data));
            }
        });
    }
}

function nextStep(id) {
    if (id === 'Not found') {
        listGoods.innerHTML = showError(id)
    } else {
        sendAjax({
            url: `http://localhost:3003/user/${id}`,
            method: 'POST',
            data: id,
            success(data) {
                listGoods.innerHTML = showProduct(JSON.parse(data));
            }
        });
    }
}

function prepareForm(form) {
    const requestPayload = {};

    [].forEach.call(form, function (item) {
        const isNotButton = item.tagName.toLowerCase() !== 'button';

        if (isNotButton) {
            requestPayload[item.name] = item.value;
        }
    });
    return requestPayload;
}

function showProduct(goods) {
    return `<div class="goods">
            ${Object.values(goods).map(value => `<div>${value}</div>`).join(' ')}
        </div> `;
}

function showError(Error) {
    return `<div class="goods">
            ${Error}
        </div> `;
}