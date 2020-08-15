import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SummaryPipe} from './summary.pipe';
import { InputEmailDirective } from './input-email.directive';
import { AdminProductsComponent } from './admin-products/admin-products.component';
@NgModule({
  declarations: [
  ProductComponent,
  SummaryPipe,
  InputEmailDirective,
  AdminProductsComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
