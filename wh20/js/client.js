let xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange = function () {
//     console.log(xhttp.readyState);
//     if (xhttp.readyState !== 4) return
//         console.log(xhttp.response);
// }

xhttp.addEventListener('load', function ({target}) {
    const resp = target.response;
    console.log(resp, 'response');
})

xhttp.open('GET', 'http://localhost:3003/user');
xhttp.send()