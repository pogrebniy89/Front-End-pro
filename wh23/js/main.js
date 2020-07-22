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
    onClick(arr1, arr2) {
        arr2.unshift(arr1.pop());
    }
};

const TaskManager = new Vue({
    el: '#app',
    data: data
});