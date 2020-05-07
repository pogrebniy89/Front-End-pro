let userName = prompt('Кто пришел', '');

if (userName == 'Админ') {
    let password = prompt('Пароль?', '');
    if (password == 'Черный Властелин') {
        alert('Добро пожаловать');
    } else if (password == '' || password == null) {
        alert('Вход отменен');
    } else {
        alert('Пароль невервн');
    }
} else if (userName == '' || userName == null) {
    alert('Входи отменен');
} else {
    alert('Я вас не заню');
}