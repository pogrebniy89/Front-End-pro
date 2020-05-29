// Пусть есть объект obj = {anonim: {say: 'Hello anonim'},
//     user: {say: 'Hello user'}, admin: {say: 'Hello admin'}},
//     и ф-я: function greeting(who) {}
//
// при помощи метода call вызвать ф-ю greeting как метод объекта
// obj без записи в него, с одним из 3ьох значений "anonim, admin, " +
// "user". Получить в ответ сообщение приветствия.

obj = {
    anonim: {say: 'Hello anonim'},
    user: {say: 'Hello user'},
    admin: {say: 'Hello admin'}
}

obj2 = {
    developer: {say: 'Hello developer'},
    editor: {say: 'Hello editor'}
}


function greeting(who) {
    return this[who].say;

}

console.log(greeting.call(obj, 'anonim'));
console.log(greeting.call(obj, 'user'));
console.log(greeting.call(obj, 'admin'));

console.log(greeting.call(obj2, 'developer'));
console.log(greeting.call(obj2, 'editor'));