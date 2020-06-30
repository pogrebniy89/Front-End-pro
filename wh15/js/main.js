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

    function contextMen() {

        const doc = document.querySelector("html");
        const contextMenu = document.querySelector(".contextMenu");

        doc.addEventListener("contextmenu", event => {
            event.preventDefault();
            contextMenu.style.top = `${event.clientY}px`;
            contextMenu.style.left = `${event.clientX}px`;
            contextMenu.classList.add("active");
        }, false);

        document.addEventListener("click", event => {
            if (event.button !== 2) {
                contextMenu.classList.remove("active");
            }
        }, false);

        contextMenu.addEventListener("click", event => {
            event.stopPropagation();
        }, false);

        let data = {
            name: 'menuContext',
            items: [
                {
                    title: 'Text1',
                    handler: 'ActionText1'
                },
                {
                    title: 'Text2',
                    handler: 'ActionText2'
                },
                {
                    title: 'Text3',
                    handler: 'ActionText3'
                }
            ]
        };

        let actions = {
            ActionText1: function () {
                console.log('Text1');
            },
            ActionText2: function () {
                console.log('Text2');
            },
            ActionText3: function () {
                console.log('Text3');
            }
        };


        function MenuContext(data, actions) {
            this.data = data;
            this.actions = actions;
        }

        MenuContext.prototype.makeMenuContext = function () {
            let fragment = document.createDocumentFragment();
            let items = this.data.items;

            for (let i = 0; i < items.length; i++) {
                let li = document.createElement('li');
                let item = items[i];
                li.innerText = item.title;
                li.addEventListener('click', actions[item.handler]);
                fragment.append(li);
            }

            return fragment;
        };

        MenuContext.prototype.makeMenu = function () {
            let fragment = this.makeMenuContext();
            contextMenu.append(fragment);
            this.contextMenu = contextMenu;

            return this;
        };

        MenuContext.prototype.render = function (selector) {
            let parent = document.querySelector(selector);

            if (this.contextMenu && parent) {
                document.querySelector(selector).append(this.contextMenu);
            }

            return this;
        };

        let menu = new MenuContext(data, actions);

        menu
            .makeMenu()
            .render('contextMenu');


    }

    contextMen();

}


