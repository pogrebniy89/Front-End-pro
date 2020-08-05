Vue.component('Diagram', {
    data() {
        return {
            diagrams: [
                {
                    name: 'D1',
                    'background': 'red'
                },
                {
                    name: 'D2',
                    'background': 'coral'
                },
                {
                    name: 'D3',
                    'background': 'greenyellow'
                },
                {
                    name: 'D4',
                    'background': 'green'
                },
                {
                    name: 'D5',
                    'background': 'aqua'
                },
                {
                    name: 'D6',
                    'background': 'burlywood'
                },
                {
                    name: 'D7',
                    'background': 'cyan'
                },
            ],
        }
    },
    methods: {
        moveEvent() {
            console.log('tut');
        }
    },
    template: `
            <div class="decor">
                <column :indexD="value" v-for="value in diagrams"></column>                     
            </div>        
     `
})

Vue.component('column', {
    props: ['indexD'],
    data() {
        return {
            heightColumn: '',
        }
    },
    methods: {
        moveEvent(value) {
            this.heightColumn = value;
        }
    },
    mounted() {
        this.heightColumn = localStorage.getItem(this.indexD.name);
    },
    template: `
        <div class="wrap">
            <div class="decorColumn" v-bind:style='{height: heightColumn + "px", background: indexD.background}'></div>
            <div>{{indexD.name}}</div>
            <range :valueRange="indexD" @moveHeight="moveEvent"></range>   
        </div>        
    `
})

Vue.component('range', {
    props: ['valueRange'],
    data() {
        return {
            value: 0,
            name: this.valueRange.name
        }
    },
    methods: {
        onClick() {
            this.$emit('moveHeight', this.value);
            localStorage[this.name] = this.value;
        }
    },
    mounted() {
        if (localStorage.getItem(this.valueRange.name)) {
            this.value = localStorage.getItem(this.valueRange.name);
        } else {
            this.value = 0;
        }

    },
    template: `
        <div><input type="range" v-model="value" min="0" max="300" step="1" @input="onClick">{{this.value}}</div>
    `
})

let vue = new Vue({
    el: '#app',
    data: {}
})