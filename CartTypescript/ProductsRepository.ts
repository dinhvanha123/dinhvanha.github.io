import {Product} from './Product';
import {exchangeCurrent} from './exchangeCurrent';


export class ProductsRepository {
	private Products : Product[]=[];
	constructor (){
		let sanphamA = new Product(101,"Coca","bulbasaur.png","Lorem Lorem Lorem",20);
		let sanphamB = new Product(102,"Pepsi","charmander.png","Lorem Lorem Lorem",22,false);
		let sanphamC = new Product(103,"Mirinda","ivysaur.png","Lorem Lorem Lorem",17);
		let sanphamD = new Product(104,"Fanta","squirtle.png","Lorem Lorem Lorem",19);
		let sanphamE = new Product(105,"Reveal","venusaur.png","Lorem Lorem Lorem",14,false);
		this.addItem(sanphamA);
		this.addItem(sanphamB);
		this.addItem(sanphamC);
		this.addItem(sanphamD);
		this.addItem(sanphamE);
	}
	public addItem(product: Product){
		this.Products[this.Products.length] = product;
		
	}
	public getItems(): Product[]{
		
		return this.Products;
	}
	public getItemById(id : number):Product{
		for (var i = 0; i < this.Products.length; i++) {
			if(id == this.Products[i].id){ return this.Products[i]}
				
		
		}
		
	}
	public showItemsInHTML():string{
		let total : number= this.Products.length;
		let xHTML : string = '';

		if(total >0){
			for (var i = 0; i < total; i++) {
				let currentItem : Product = this.Products[i];
				if(currentItem.canBuy == true) {
					xHTML +=`<div class="media product">
                                <div class="media-left">
                                    <a href="#">
                                        <img class="media-object" src="img/characters/${ currentItem.image }" alt="${ currentItem.name }">
                                    </a>
                                </div>
                                <div class="media-body">
                                    <h4 class="media-heading">${ currentItem.name }</h4>
                                    <p>${ currentItem.summary }</p>
                                   	<input name = 'quantity-product-${ currentItem.id }' type='number' value='1' min = '1'/>
                                   	<a data-product = '${ currentItem.id }' href ='#' class='price nutthongtin'>${ exchangeCurrent.toCurrent(currentItem.price,'$','2')} </a> 
                                </div>
                            </div>`;
				} else {
						xHTML +=`<div class="media product">
                                <div class="media-left">
                                    <a href="#">
                                        <img class="media-object" src="img/characters/${ currentItem.image }" alt="${ currentItem.name }">
                                    </a>
                                </div>
                                <div class="media-body">
                                    <h4 class="media-heading">${ currentItem.name }</h4>
                                    <p>${ currentItem.summary }</p>
                                   	
                                   	<span class='price'>${ exchangeCurrent.toCurrent(currentItem.price,'$')} </span> 
                                </div>
                            </div>`;
				}
				
			}} 
		else{ 
			xHTML = 'Cart Empty';
				} 
		return xHTML;
	};
} 



