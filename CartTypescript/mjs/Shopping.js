"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductsRepository_1 = require("./ProductsRepository");
const Cart_1 = require("./Cart");
var MDefine;
(function (MDefine) {
    MDefine.ELM_LIST_PRODUCT = 'list-product';
    MDefine.ELM_NOTIFICATION = 'mnotification';
    MDefine.ELM_CART_BODY = 'my-cart-body';
    MDefine.ELM_CART_FOOTER = 'my-cart-footer';
})(MDefine || (MDefine = {}));
var MNotication;
(function (MNotication) {
    MNotication.NOTI_READY_BUY = 'CartShop ready to buy';
    MNotication.GREATER_THAN_ONE = 'You need to buy equal or more greater 1';
})(MNotication || (MNotication = {}));
let sanpham1 = new ProductsRepository_1.ProductsRepository();
let product = sanpham1.getItems();
let thongTinSanPham = document.getElementById(MDefine.ELM_LIST_PRODUCT);
let cartObj = new Cart_1.Cart();
function showListProduct() {
    thongTinSanPham.innerHTML = (sanpham1.showItemsInHTML());
}
function showNotification(str) {
    document.getElementById(MDefine.ELM_NOTIFICATION).innerHTML = str;
}
function showCart() {
    document.getElementById(MDefine.ELM_CART_BODY).innerHTML = cartObj.showCartBodyInHTML();
    document.getElementById(MDefine.ELM_CART_FOOTER).innerHTML = cartObj.showCartFooterInHTML();
}
showListProduct();
showCart();
showNotification(MNotication.NOTI_READY_BUY);
var tienMoiSanPham = document.getElementsByClassName('nutthongtin');
for (var i = 0; i < tienMoiSanPham.length; i++) {
    tienMoiSanPham[i].addEventListener('click', function () {
        let idClick = this.getAttribute('data-product');
        let quantity = parseInt(this.previousElementSibling.value);
        if (quantity < 1) {
            showNotification(MNotication.GREATER_THAN_ONE);
        }
        else {
            let product = sanpham1.getItemById(idClick);
            cartObj.addProduct(product, quantity);
            showCart();
        }
        var updateCart = document.getElementsByClassName('update-cart-item');
        for (var i = 0; i < updateCart.length; i++) {
            updateCart[i].addEventListener('click', function () {
                let idClickInput = this.getAttribute('data-product');
                let quantityInput = parseInt(document.getElementsByName("cart-item-quantity-" + idClick)[0].value);
                if (quantityInput < 1) {
                    showNotification(MNotication.GREATER_THAN_ONE);
                }
                else {
                    let product = sanpham1.getItemById(idClickInput);
                    cartObj.updateProduct(product, quantityInput);
                    showCart();
                }
            }, false);
        }
        ;
    }, false);
}
;
