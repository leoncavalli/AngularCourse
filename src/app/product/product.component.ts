import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../repository.model'
import { Product } from '../product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  model: ProductRepository = new ProductRepository();
  disable = true;
  getClasses(id: number): string {
    let product = this.model.getProductsbyId(id);
    return (product.price <= 1000 ? "bg-warning" : "bg-secondary") + " m-2 p-2";
  }
  product: Product = this.model.getProductsbyId(1);
  getClassMap(id: number): Object {
    let product = this.model.getProductsbyId(id);
    return {
      "bg-info": product.price < 3000,
      "bg-secondary": product.price > 3000,
      "text-center text-white": product.name.length > 4
    }

  }
  color:string="red";

  alert($event):void{
    alert("Button is clicked.");
    console.log($event.srcElement.id)
  }

  mail="bg@gmail.com";

  onkeyUp(email){
      console.log(email)
  }

  onkeyUp2(){
      console.log(this.mail)
  }

  today:number=Date.now();
  
  longsentence:string="Lorem ipsum dolor sit amet consectatur elipdis a sciping elit a consectatur!"
}

