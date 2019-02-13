/* jslint es5:true, indent: 2 */
/* global Vue, io */
/* exported vm */


const socket = io();

const vm = new Vue({
    el: '#orders',
    data: {
        orders: {},
    },
    created() {
        socket.on('initialize', (data) => {
            this.orders = data.orders;
        });

        socket.on('currentQueue', (data) => {
            this.orders = data.orders;
        });
    },
});