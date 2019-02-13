/* jslint es5:true, indent: 2 */
/* global Vue, io */
/* exported vm */


const socket = io();

const vm = new Vue({
    el: 'main',
    data: {
        orders: {},
        info: null,
        isShown: false,
        burgers,
    },
    created() {
        socket.on('initialize', (data) => {
            this.orders = data.orders;
        });

        socket.on('currentQueue', (data) => {
            this.orders = data.orders;
        });
    },
    methods: {
        getNext() {
            const lastOrder = Object.keys(this.orders).reduce((prev, next) => Math.max(prev, next), 100);
            return lastOrder + 1;
        },
        addOrder(event) {
            const offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top,
            };
            const orderArray = [
                ['Beans', 'Curry'],
                ['Soup', 'Bread'],
                ['Spaghetti', 'Meatballs'],
            ];
            const rand = Math.round(Math.random() * Math.floor(orderArray.length - 1));
            socket.emit('addOrder', {
                orderId: this.getNext(),
                details: {
                    x: event.clientX - 10 - offset.x,
                    y: event.clientY - 10 - offset.y,
                },
                orderItems: orderArray[rand],
            });
        },
        displayOrder(event) {
            const offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top,
            };
            this.orders = [{
                orderId: 'T',
                details: {
                    x: event.clientX - 10 - offset.x,
                    y: event.clientY - 10 - offset.y,
                },
                orderItems: null,
            }]
        },
        purchase_button_pressed() {
            console.log('Button clicked!');
            this.info = readForm();
            this.isShown = true;
        },
        formUpdate() {
            console.log('Form updated!');
            this.isShown = false;
        },
    },
});