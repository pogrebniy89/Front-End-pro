console.log(Vue, 'vue');

let data = {
    listLeft: [
        'Важное дело 1',
        'Важное дело 2',
        'Важное дело 3',
        'Важное дело 4',
        'Важное дело 5',
    ],
    listRight: [
        'Дело 1',
        'Дело 2',
        'Дело 3',
        'Дело 4',
        'Дело 5',
    ],
    onClick(value) {
        console.log(value, 'результа кнопки');
    }
};

const TaskManager = new Vue({
    el: '#app',
    data: data
})