import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './commerce/product/product.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full", redirectTo: "product"},
  {path: "product", component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
