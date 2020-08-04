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
            this.heightColumn = value;
            // localStorage.setItem(this.indexD.name, value);
        }
    },
    mounted() {
        this.heightColumn = localStorage.getItem(this.indexD.name);
        // localStorage.setItem(this.indexD.name, this.indexD.height);
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
    // watch: {
    //     value(newvalue) {
    //         if(newvalue === null) {
    //             localStorage.setItem(this.valueRange.name, this.valueRange.height);
    //         } else {
    //             localStorage.setItem(this.valueRange.name, newvalue);
    //         }
    //
    //     }
    // },
    mounted() {
        this.value = localStorage.getItem(this.valueRange.name);
    },


    template: `
        <div><input type="range" v-model="value" min="100" max="300" step="1" @input="onClick">{{this.value}}</div>
    `
})


let vue = new Vue({
    el: '#app',
    data: {}
})