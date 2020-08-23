import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  selectedProduct;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params=>{
      let id=+params.get('id');
      this.selectedProduct=products.find(p=>p.id===id);
    })  
  }


}
