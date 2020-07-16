// let xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange = function () {
//     console.log(xhttp.readyState);
//     if (xhttp.readyState !== 4) return
//         console.log(xhttp.response);
// }

// xhttp.addEventListener('load', function ({target}) {
//     const resp = target.response;
//     console.log(resp, 'response');
// })
//
// xhttp.open('GET', 'http://localhost:3003/user');
// xhttp.send()

function sendAjax({url, method, success, data}) {
    const xhttp = new XMLHttpRequest();

    xhttp.addEventListener('load', function ({target}) {
        const resp = target.response;
        success(resp);
    })

    xhttp.open(method, url);
    console.log(JSON.stringify(data), 'data');
    xhttp.send(JSON.stringify(data));
}


const form = document.querySelectorAll('form');

form.forEach(form => {
    // console.log(form, 'form');
    form.addEventListener('click', submit)
})

function submit(event) {
    event.preventDefault();
    const target = event.target;

    // console.dir(this, 'this');

    if (target.tagName.toLowerCase() === 'button') {
        const requestPayload = prepareForm(this);
        sendAjax({
            url: `http://localhost:3003/user-all`,
            method: 'POST',
            data: requestPayload,
            success(data) {
                nextStep(JSON.parse(data));
            }
        });
    }
}

function nextStep(id) {
    console.log("следующий шаг", id);
    sendAjax({
        url: `http://localhost:3003/user/${id}`,
        method: 'POST',
        data: id,
        success(data) {
            console.log(data, 'лист с товарими');
        }
    });
}

function prepareForm(form) {
    const requestPayload = {};

    [].forEach.call(form, function (item) {
        const isNotButton = item.tagName.toLowerCase() !== 'button';

        if (isNotButton){
            // console.log(item, 'item');
            requestPayload[item.name] = item.value;
        }
    });

    return requestPayload;
    // console.log(requestPayload, 'requestPayload');
}


// button.addEventListener('click', event => {
//     sendAjax({
//         url: `http://localhost:3003//user-all`,
//         method: 'post',
//         success(data) {
//             console.log('succsess результал ответа серваера', data);
//         }
//     });
// });