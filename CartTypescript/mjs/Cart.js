"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CartItem_1 = require("./CartItem");
const exchangeCurrent_1 = require("./exchangeCurrent");
function myFunction() {
    alert("Page is loaded");
}
exports.myFunction = myFunction;
class Cart {
    constructor() {
        this.cartItem = [];
        this.TotalQuantity = 0;
    }
    ;
    addProduct(product, quantity) {
        let position = this.getProductPosition(product);
        if (position > -1) {
            this.cartItem[position].Quantity += quantity;
        }
        else {
            this.cartItem[this.cartItem.length] = new CartItem_1.CartItem(product, quantity);
        }
        this.TotalQuantity += quantity;
    }
    ;
    getProductPosition(product) {
        let total = this.cartItem.length;
        for (var i = 0; i < total; i++) {
            if (this.cartItem[i].Product.id == product.id)
                return i;
        }
        return -1;
    }
    ;
    updateProduct(product, quantity) {
        console.log(product);
        console.log(quantity);
    }
    ;
    deleteProduct(product) { }
    ;
    isEmpty() {
        if (this.cartItem.length == 0)
            return true;
    }
    getTotalQuantity() { return 1; }
    ;
    getTotalPrice() { return 1; }
    ;
    showCartBodyInHTML() {
        let xHTML = '';
        if (!this.isEmpty()) {
            let total = this.cartItem.length;
            for (var i = 0; i < total; i++) {
                let cartCurrent = this.cartItem[i];
                xHTML += cartCurrent.showCartItemInHTML();
            }
        }
        else {
            xHTML = '<th colspan ="6">Empty product in your cart</span>';
        }
        return xHTML;
    }
    showCartFooterInHTML() {
        let xHTML = ``;
        let total = this.cartItem.length;
        var totalCart = [];
        var totalMoney = [];
        if (!this.isEmpty()) {
            let total = 0;
            let totalTien = 0;
            this.cartItem.forEach((cartItem) => { total += cartItem.Quantity; });
            this.cartItem.forEach((cartItem) => { totalTien += (cartItem.Product.price * cartItem.Quantity); });
            xHTML = `<tr>
			<td colspan='4'>There are <b>${this.TotalQuantity}</b> items in your shopping cart</td>
			<td colspan='2' class='total-price text-left'>${exchangeCurrent_1.exchangeCurrent.toCurrent(totalTien, '$')} </td>
			</tr>`;
        }
        return xHTML;
    }
    ;
}
exports.Cart = Cart;
