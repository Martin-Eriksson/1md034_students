/* jslint es5:true, indent: 2 */
/* global Vue, io */
/* exported vm */

const socket = io();
const vm = new Vue({
    el: 'main',
    data: {
        orders: [],
        info: null,
        selectedBurgers: null,
        isShown: false,
        burgers,
    },
    methods: {
        addOrder() {
            let order = this.orders[0];
            order.orderItems = this.selectedBurgers;
            order.info = this.info;
            // order.orderId = this.getNextId();
            order.orderId;

            socket.emit('addOrder', order);
        },
        displayOrder(event) {
            this.formUpdate();
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
                info: this.info,
            }]
        },
        purchase_button_pressed() {
            console.log('Button clicked!');
            this.info = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                payment_options: document.getElementById('payment_options').value,
                gender: document.querySelector('input[name="gender"]:checked').value,
            };
            this.selectedBurgers = [...document.querySelectorAll('#burger_menu input:checked')].map(x => x.value);

            if (this.orders.length > 0) {
                this.addOrder();
                this.isShown = true;
            }
        },
        formUpdate() {
            console.log('Form updated!');
            this.isShown = false;
        },
    },
});