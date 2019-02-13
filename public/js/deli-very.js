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
        // socket.on('initialize', (data) => {
        //     this.orders = data.orders;
        // });

        // socket.on('currentQueue', (data) => {
        //     this.orders = data.orders;
        // });
    },
    methods: {
        // getNext() {
        //     const lastOrder = Object.keys(this.orders).reduce((prev, next) => Math.max(prev, next), 0);
        //     return lastOrder + 1;
        // },
        addOrder() {
            const orderArray = [
                ['Beans', 'Curry'],
                ['Soup', 'Bread'],
                ['Spaghetti', 'Meatballs'],
            ];
            const rand = Math.round(Math.random() * Math.floor(orderArray.length - 1));


            let order = this.orders[0];
            // order.orderId = this.getNext(); // or still 'T' ????
            order.orderItems = this.info.selectedBurgers.map(x => x.value);

            socket.emit('addOrder', order);
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
            this.info = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                payment_options: document.getElementById('payment_options').value,
                gender: document.querySelector('input[name="gender"]:checked').value,
                selectedBurgers: [...document.querySelectorAll('#burger_menu input:checked')] /* .map(x => ` ${x.value}`) */ ,
            };
            this.addOrder();
            this.isShown = true;
        },
        formUpdate() {
            console.log('Form updated!');
            this.isShown = false;
        },
    },
});