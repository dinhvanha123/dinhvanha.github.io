import {ProductsRepository} from './ProductsRepository';
import {Product} from './Product';
import {CartItem} from './CartItem';
import {Cart} from './Cart';

namespace MDefine{
	export const ELM_LIST_PRODUCT = 'list-product';
	export const ELM_NOTIFICATION = 'mnotification';
	export const ELM_CART_BODY= 'my-cart-body';
	export const ELM_CART_FOOTER= 'my-cart-footer';
}

namespace MNotication{
	export const NOTI_READY_BUY = 'CartShop ready to buy';
	export const GREATER_THAN_ONE = 'You need to buy equal or more greater 1';
}
let sanpham1 = new ProductsRepository();
let product : Product[]=sanpham1.getItems();
let thongTinSanPham = document.getElementById(MDefine.ELM_LIST_PRODUCT);
let cartObj = new Cart();

function showListProduct(){
	thongTinSanPham.innerHTML = (sanpham1.showItemsInHTML());
}
function showNotification(str : string){
document.getElementById(MDefine.ELM_NOTIFICATION).innerHTML = str;
}
function showCart(){
document.getElementById(MDefine.ELM_CART_BODY).innerHTML = cartObj.showCartBodyInHTML();
document.getElementById(MDefine.ELM_CART_FOOTER).innerHTML = cartObj.showCartFooterInHTML();
}


// Buy Product
showListProduct();
showCart();
showNotification(MNotication.NOTI_READY_BUY);
var tienMoiSanPham = document.getElementsByClassName('nutthongtin');

for (var i = 0; i < tienMoiSanPham.length; i++) {
	tienMoiSanPham[i].addEventListener('click',function(){
		let idClick : number = this.getAttribute('data-product');
		let quantity : number = parseInt(this.previousElementSibling.value) ;
		if(quantity < 1 ){showNotification(MNotication.GREATER_THAN_ONE); }
		else {
			let product : Product = sanpham1.getItemById(idClick);
			
			cartObj.addProduct(product,quantity);
			showCart();
		}
		var updateCart =document.getElementsByClassName('update-cart-item');
		for (var i = 0; i < updateCart.length; i++) {
			updateCart[i].addEventListener('click',function(){
			let idClickInput : number = this.getAttribute('data-product');
			let quantityInput : number = parseInt(document.getElementsByName("cart-item-quantity-"+idClick)[0].value);
			if(quantityInput < 1 ){showNotification(MNotication.GREATER_THAN_ONE); }
			else {
			let product : Product = sanpham1.getItemById(idClickInput);
			
			cartObj.updateProduct(product,quantityInput);
			showCart();
		}
			// console.log(idClickInput+"---"+quantityInput);
			},false);
		} // end for
		;


},false)};


//Update Product







