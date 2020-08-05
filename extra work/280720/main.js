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
        moveEvent(value){
            console.log('tut', value);
            this.heightColumn = value;
        }
    },
    template: `
        <div class="wrap">
            <div class="decorColumn" v-bind:style='{height: heightColumn + "px", background: indexD.background}'>{{indexD.name}}
            
            </div>
            <range :valueRange="indexD.height" @moveHeight="moveEvent"></range>   
        </div>
        
    `
})

Vue.component('range', {
    props: ['valueRange'],
    data() {
        return {
            value: this.valueRange
        }
    },
    methods: {
        onClick(){
            this.$emit('moveHeight', this.value);
        }
    },
    template: `
        <div><input type="range" v-model="value" min="100" max="300" step="1" @input="onClick">{{this.value}}</div>
    `
})


let vue = new Vue({
    el: '#app',
    data: {
        foo: 123
    }
})