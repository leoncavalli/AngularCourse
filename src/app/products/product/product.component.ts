import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from 'src/app/product';
import { Location } from '@angular/common';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  selectedProduct;

  constructor(
    private route:ActivatedRoute,
    private location:Location) { }

  ngOnInit(){
    
    this.route.paramMap
      .subscribe(params=>{
        let id=+params.get('id');
        this.selectedProduct=products.find(i=>i.id==id)
      });
    
  }

  goBack(){
    this.location.back();
  }
}
