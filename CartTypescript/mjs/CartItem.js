"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exchangeCurrent_1 = require("./exchangeCurrent");
function myFunction() {
    alert("Page is loaded");
}
exports.myFunction = myFunction;
class CartItem {
    constructor(Product, Quantity = 1) {
        this._Product = Product;
        this._Quantity = Quantity;
    }
    getSubTotal() {
        return (this.Quantity * this.Product.price);
    }
    showCartItemInHTML() {
        return `<tr>
					<th scope="row">${this._Product.id}</th>
					<td>${this._Product.name}</td>
					<td> ${exchangeCurrent_1.exchangeCurrent.toCurrent(this._Product.price, '$')} </td>
					<td><input name="cart-item-quantity-${this._Product.id}" type="number" value="${this.Quantity}" min="1"></td>
					<td><strong>${exchangeCurrent_1.exchangeCurrent.toCurrent(this.getSubTotal(), '$')}</strong></td>
					<td>
						<a class="label label-info update-cart-item"  href="#" data-product="${this._Product.id}">Update</a>
						<a class="label label-danger delete-cart-item" href="#" data-product="${this._Product.id}">Delete</a>
					</td>
				</tr>`;
    }
    get Product() { return this._Product; }
    ;
    set Product(v) { this._Product = v; }
    ;
    get Quantity() { return this._Quantity; }
    ;
    set Quantity(v) { this._Quantity = v; }
    ;
}
exports.CartItem = CartItem;
