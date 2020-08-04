Vue.component('Diagram', {
    data() {
        return {
            diagrams: [
                {
                    name: 'D1',
                    height: 100,
                    'background': 'red'
                },
                {
                    name: 'D2',
                    height: 110,
                    'background': 'coral'
                },
                {
                    name: 'D3',
                    height: 120,
                    'background': 'greenyellow'
                },
                {
                    name: 'D4',
                    height: 130,
                    'background': 'green'
                },
                {
                    name: 'D5',
                    height: 140,
                    'background': 'aqua'
                },
                {
                    name: 'D6',
                    height: 140,
                    'background': 'burlywood'
                },
                {
                    name: 'D7',
                    height: 160,
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
            // console.log('tut', value);
            this.heightColumn = value;
        }
    },
    mounted() {
        this.heightColumn = localStorage.getItem(this.diagramName);
    },
    template: `
        <div class="wrap">
            <div class="decorColumn" v-bind:style='{height: heightColumn + "px", background: indexD.background}'>{{indexD.name}}
            
            </div>
            <range :valueRange="indexD" @moveHeight="moveEvent"></range>   
        </div>
        
    `
})

Vue.component('range', {
    props: ['valueRange'],
    data() {
        return {
            value: this.valueRange.height,
            diagramName: this.valueRange.name
        }
    },
    methods: {
        onClick() {
            this.$emit('moveHeight', this.value);
        }
    },
    mounted() {
        this.value = localStorage.getItem(this.diagramName);
    },
    watch: {
        value(newvalue) {
            localStorage.setItem(this.diagramName, newvalue);
        }
    },
    template: `
        <div><input type="range" v-model="value" min="100" max="300" step="1" @input="onClick">{{this.value}}</div>
    `
})


let vue = new Vue({
    el: '#app',
    data: {}
})