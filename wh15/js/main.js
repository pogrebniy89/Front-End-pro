window.onload = function () {

    function menuModule() {
        let data = {
            name: 'menu',
            type: 'row', // row|column
            items: [
                {
                    title: 'Add',
                    handler: 'ActionAdd'
                },
                {
                    title: 'Exit',
                    handler: 'ActionExit'
                },
                {
                    title: 'Save',
                    handler: 'ActionSaveAs'
                },
                {
                    title: 'Edit',
                    handler: 'ActionEdit'
                }
            ]
        };

        var actions = {
            ActionAdd: function () {
                console.log('add');
            },
            ActionSaveAs: function () {
                console.log('save');
            },
            ActionExit: function () {
                console.log('exit');
            },
            ActionEdit: function () {
                console.log('Edit');
            }
        };

        function MenuComponent(data, actions) {
            this.data = data;
            this.actions = actions;
            this.ul = null;
        }

        MenuComponent.prototype.makeMenuItems = function () {
            let fragment = document.createDocumentFragment();
            let items = this.data.items;

            for (let i = 0; i < items.length; i++) {
                let li = document.createElement('li');
                let item = items[i];
                li.classList.add('menu-item');
                li.innerText = item.title;
                li.addEventListener('click', actions[item.handler]);
                fragment.append(li);
            }

            return fragment;
        };

        MenuComponent.prototype.makeMenuContainer = function () {
            let ul = document.createElement('ul');
            ul.classList.add(data.type);

            return ul;
        };

        MenuComponent.prototype.makeMenu = function () {
            let ul = this.makeMenuContainer();
            let fragment = this.makeMenuItems();
            ul.append(fragment);
            this.ul = ul;

            return this;
        };

        MenuComponent.prototype.render = function (selector) {
            let parent = document.querySelector(selector);

            if (this.ul && parent) {
                document.querySelector(selector).append(this.ul);
            }

            return this;
        };

        let menu = new MenuComponent(data, actions);

        menu
            .makeMenu()
            .render('.container');


    }

    menuModule();

    function contextMenu() {

        document.oncontextmenu = function (event) {
            event.preventDefault();
            alert("Контекстное меню документа");
        };

        let data = {
            name: 'menuContext',
            items: [
                {
                    title: 'MenuRow',
                    handler: 'MenuRow'
                },
                {
                    title: 'MenuColumn',
                    handler: 'MenuColumn'
                }
            ]
        };

        let actions = {
            MenuRow: function () {
                console.log('Горизонтальное меню');
                column()
            },
            MenuColumn: function () {
                console.log('Вертикальное меню');

            }
        };

        function MenuContext(data, actions) {
            this.data = data;
            this.actions = actions;
            this.ul = null;
        }

        MenuContext.prototype.makeMenuItems = function () {
            let fragment = document.createDocumentFragment();
            let items = this.data.items;

            for (let i = 0; i < items.length; i++) {
                let li = document.createElement('li');
                let item = items[i];
                li.classList.add('context-menu');
                li.innerText = item.title;
                li.addEventListener('click', actions[item.handler]);
                fragment.append(li);
            }

            return fragment;
        };
        MenuContext.prototype.makeMenuContainer = function () {
            let ul = document.createElement('ul');
            ul.classList.add(data.type);

            return ul;
        };

        MenuContext.prototype.makeMenu = function () {
            let ul = this.makeMenuContainer();
            let fragment = this.makeMenuItems();
            ul.append(fragment);
            this.ul = ul;

            return this;
        };

        MenuContext.prototype.render = function (selector) {
            let parent = document.querySelector(selector);

            if (this.ul && parent) {
                document.querySelector(selector).append(this.ul);
            }

            return this;
        };

        let menu = new MenuContext(data, actions);

        menu
            .makeMenu()
            .render('.container');


    }

    contextMenu();

}


