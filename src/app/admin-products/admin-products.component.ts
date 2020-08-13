import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../repository.model';
import { Product } from '../product.model';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {


  products;
  model:ProductRepository;
  selectedProduct:Product;

  constructor() { 
    this.model=new ProductRepository();
    this.products=this.model.getProducts();
  }

  // Classic Form Operations

  getSelectedProduct(product:Product):boolean{
    return product==this.selectedProduct;
  }

  editProduct(product:Product){
    this.selectedProduct=product;
  }
  SaveChanges(){
    let prod=this.model.getProductsbyId(this.selectedProduct.id);
    prod.name=this.selectedProduct.name;
    prod.description=this.selectedProduct.description;
    prod.price=this.selectedProduct.price;
  }

  newProduct:Product=new Product();

  get jsonProduct(){
    return JSON.stringify(this.newProduct);
  }

  addProduct(p:Product){
    this.model.addProduct(p);
  }


}
