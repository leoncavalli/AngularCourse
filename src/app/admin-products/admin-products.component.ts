import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../repository.model';
import { Product } from '../product.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {
  productForm=new FormGroup({

    name:new FormControl(null,[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25)
    ]),
    desc:new FormControl(),
    img:new FormControl(),
    price:new FormControl()

  })

  products;
  model:ProductRepository;
  selectedProduct:Product;

  constructor() { 
    this.model=new ProductRepository();
    this.products=this.model.getProducts();
  }

 

  onSubmit(){
    console.log(this.productForm.value);
  }
  


}
