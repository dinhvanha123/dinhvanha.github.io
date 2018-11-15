"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Product");
const exchangeCurrent_1 = require("./exchangeCurrent");
class ProductsRepository {
    constructor() {
        this.Products = [];
        let sanphamA = new Product_1.Product(101, "Coca", "bulbasaur.png", "Lorem Lorem Lorem", 20);
        let sanphamB = new Product_1.Product(102, "Pepsi", "charmander.png", "Lorem Lorem Lorem", 22, false);
        let sanphamC = new Product_1.Product(103, "Mirinda", "ivysaur.png", "Lorem Lorem Lorem", 17);
        let sanphamD = new Product_1.Product(104, "Fanta", "squirtle.png", "Lorem Lorem Lorem", 19);
        let sanphamE = new Product_1.Product(105, "Reveal", "venusaur.png", "Lorem Lorem Lorem", 14, false);
        this.addItem(sanphamA);
        this.addItem(sanphamB);
        this.addItem(sanphamC);
        this.addItem(sanphamD);
        this.addItem(sanphamE);
    }
    addItem(product) {
        this.Products[this.Products.length] = product;
    }
    getItems() {
        return this.Products;
    }
    getItemById(id) {
        for (var i = 0; i < this.Products.length; i++) {
            if (id == this.Products[i].id) {
                return this.Products[i];
            }
        }
    }
    showItemsInHTML() {
        let total = this.Products.length;
        let xHTML = '';
        if (total > 0) {
            for (var i = 0; i < total; i++) {
                let currentItem = this.Products[i];
                if (currentItem.canBuy == true) {
                    xHTML += `<div class="media product">
                                <div class="media-left">
                                    <a href="#">
                                        <img class="media-object" src="img/characters/${currentItem.image}" alt="${currentItem.name}">
                                    </a>
                                </div>
                                <div class="media-body">
                                    <h4 class="media-heading">${currentItem.name}</h4>
                                    <p>${currentItem.summary}</p>
                                   	<input name = 'quantity-product-${currentItem.id}' type='number' value='1' min = '1'/>
                                   	<a data-product = '${currentItem.id}' href ='#' class='price nutthongtin'>${exchangeCurrent_1.exchangeCurrent.toCurrent(currentItem.price, '$', '2')} </a> 
                                </div>
                            </div>`;
                }
                else {
                    xHTML += `<div class="media product">
                                <div class="media-left">
                                    <a href="#">
                                        <img class="media-object" src="img/characters/${currentItem.image}" alt="${currentItem.name}">
                                    </a>
                                </div>
                                <div class="media-body">
                                    <h4 class="media-heading">${currentItem.name}</h4>
                                    <p>${currentItem.summary}</p>
                                   	
                                   	<span class='price'>${exchangeCurrent_1.exchangeCurrent.toCurrent(currentItem.price, '$')} </span> 
                                </div>
                            </div>`;
                }
            }
        }
        else {
            xHTML = 'Cart Empty';
        }
        return xHTML;
    }
    ;
}
exports.ProductsRepository = ProductsRepository;
