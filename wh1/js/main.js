/*--------------------Закон Нютона*/


let f = prompt("Укажите силу F", '');
let m = prompt("Укажите массу m", '');
let a = f / m;

document.write('**************<br/>');
document.write('Ускорение тела при силе F = ');
document.write(f);
document.write(', и массе m = ');
document.write(m);
document.write(':<br/>');
document.write('--------------------<br/>');
document.write('a = ');
document.write(a);
document.write('.<br/>');
document.write('--------------------<br/>');
document.write('end.');

/*--------------------------------------------------------------------*/

//------------------ Написать программу которая получит от 3ьох пользователя информацию возраст, имя, фамилию

console.log('**************');
console.log('Список студентов зарегестрировавшихся на вебинар:');

let personOne = prompt('Введите свой возраст', '')
    + ' '
    + 'лет'
    + ' ' + prompt('Введите свое имя', '')
    + ' ' +
    prompt('Введите свою фамилию', '');

console.log('1.' + ' ' + personOne);

let personTwo = prompt('Введите свой возраст', '')
    + ' '
    + 'лет'
    + ' ' + prompt('Введите свое имя', '')
    + ' ' +
    prompt('Введите свою фамилию', '');

console.log('2.' + ' ' + personTwo);

let personThree = prompt('Введите свой возраст', '')
    + ' '
    + 'лет'
    + ' ' + prompt('Введите свое имя', '')
    + ' ' +
    prompt('Введите свою фамилию', '');

console.log('3.' + ' ' + personThree);

console.log('-------------- '
    + 'Средний возраст студента: '
    + (parseInt(personOne)
        + parseInt(personTwo)
        + parseInt(personThree)) / 3
    + ' --------------');

console.log('**************');





