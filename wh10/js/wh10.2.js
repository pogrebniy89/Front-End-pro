// Пусть дан следующий код:
//     var user = {name: 'Алексей'}
//
// function func(surname, patronymic)
// { alert('привет' + ' ' + this.name + ', ' + patronymic + ' ' + surname); }
//
// func(); //тут должно вывести 'привет, Алексей Алексеевич Петров'
//
// при помощи apply вывести сообщение 'привет, ' +
// 'Алексей Алексеевич Петров' 'Алексеевич', 'Петров' должно быть параметрами ф-ии.

let user = {name: 'Алексей'};

function func(surname, patronymic) {
    alert('привет' + ', ' + this.name + ' ' + patronymic + ' ' + surname);
}

let arrSurname = ['Петров', 'Алексеевич'];

func.apply(user, arrSurname);