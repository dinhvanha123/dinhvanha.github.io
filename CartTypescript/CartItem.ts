import {Product} from './Product';
import {exchangeCurrent} from './exchangeCurrent';
import {Cart} from './Cart';
export function myFunction(){
	alert("Page is loaded");
}
 
export class CartItem {
	private _Product : Product;
	private _Quantity : number;
	constructor(Product : Product, Quantity : number =1 ){
		this._Product = Product;
		this._Quantity = Quantity;
	}
	public getSubTotal():number{
		return (this.Quantity * this.Product.price);
	}
	public showCartItemInHTML () : string {
		return `<tr>
					<th scope="row">${this._Product.id}</th>
					<td>${this._Product.name}</td>
					<td> ${exchangeCurrent.toCurrent(this._Product.price,'$')} </td>
					<td><input name="cart-item-quantity-${this._Product.id}" type="number" value="${this.Quantity}" min="1"></td>
					<td><strong>${exchangeCurrent.toCurrent(this.getSubTotal(),'$')}</strong></td>
					<td>
						<a class="label label-info update-cart-item"  href="#" data-product="${this._Product.id}">Update</a>
						<a class="label label-danger delete-cart-item" href="#" data-product="${this._Product.id}">Delete</a>
					</td>
				</tr>`;
	}
	public get Product() : Product {return this._Product};
	public set Product(v : Product) {this._Product = v};
	public get Quantity() : number {return this._Quantity};
	public set Quantity(v : number) {this._Quantity = v};

}