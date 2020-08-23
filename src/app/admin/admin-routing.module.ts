import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {AdminProductsComponent} from './admin-products/admin-products.component';
import {AdminCategoriesComponent} from './admin-categories/admin-categories.component';
import { from } from 'rxjs';
import { AuthGuard } from '../auth-guard.service';

const routes: Routes = [
  {
    path:'admin',
    component:AdminComponent,
    canActivate:[AuthGuard],
    children:[{
      path:'',
      children:[
        {path:'products',component:AdminProductsComponent},
        {path:'categories',component:AdminCategoriesComponent}
      ]
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
