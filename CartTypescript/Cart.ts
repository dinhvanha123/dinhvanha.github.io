import {CartItem} from './CartItem';
import {Product} from './Product';
import {exchangeCurrent} from './exchangeCurrent';
export function myFunction(){
	alert("Page is loaded");
}
export class Cart {
	private cartItem : CartItem[] = [];
	private TotalQuantity :number =0;
	constructor (){};
	addProduct(product: Product,quantity : number) : void {
		
		let position :number = this.getProductPosition(product) ;
		if ( position > -1){
			this.cartItem[position].Quantity += quantity;
		}else {
			this.cartItem[this.cartItem.length] = new CartItem(product,quantity);
		}
		

		this.TotalQuantity +=quantity;

		
	};
	getProductPosition(product:Product) : number{
		
		let total : number = this.cartItem.length;
		for (var i :number  = 0; i < total ; i++) {
			if (this.cartItem[i].Product.id == product.id ) return i;
			}
		
			return -1;
			
			
		
	};
	updateProduct(product: Product,quantity : number) : void {
		console.log(product);
		console.log(quantity);
	};
	deleteProduct(product: Product) : void {};
	isEmpty() : boolean { 
		if(this.cartItem.length ==0) return true;
	}
	getTotalQuantity() : number { return 1;};
	getTotalPrice() : number { return 1;};
	showCartBodyInHTML ():string{ 
		let xHTML :string ='';
		if(!this.isEmpty()){
			let total : number = this.cartItem.length;
			for (var i = 0; i < total; i++) {
				let cartCurrent : CartItem = this.cartItem[i];
				xHTML += cartCurrent.showCartItemInHTML();
			}
				
		}
		else {
			xHTML ='<th colspan ="6">Empty product in your cart</span>';
		}

		return xHTML;
	}
	showCartFooterInHTML ():string{ 
		let xHTML :string =``;
		let total : number = this.cartItem.length;
		var totalCart : number[]=[];
		var totalMoney : number[]=[];
		if(!this.isEmpty()){
			
			let total :number = 0;
			let totalTien :number =0;
			this.cartItem.forEach(	(cartItem: CartItem) => { total += cartItem.Quantity });
			this.cartItem.forEach(	(cartItem: CartItem) => { totalTien += (cartItem.Product.price * cartItem.Quantity )});
			// for (var i = 0; i < total; i++) {
			// 	totalCart[totalCart.length] = this.cartItem[i].Quantity;
			// 	totalMoney[totalMoney.length] = this.cartItem[i].getSubTotal();

			// }
			
			
			// var sumMoney :number =0;
			// var sum :number = 0;
			// for (var i = 0; i < totalCart.length; i++) {
			// 	sum += totalCart[i];
			// 	sumMoney += totalMoney[i];
			// };
		xHTML = `<tr>
			<td colspan='4'>There are <b>${this.TotalQuantity}</b> items in your shopping cart</td>
			<td colspan='2' class='total-price text-left'>${exchangeCurrent.toCurrent(totalTien,'$')} </td>
			</tr>`; }
		return xHTML;

	};
}	