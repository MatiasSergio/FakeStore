
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { CategorysingleComponent } from './categorysingle/categorysingle.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: 'category/:category',
    component: CategorysingleComponent
  },
 
  {path: '', component: ShopComponent,
    children: [
      {path: 'products', component: ProductsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
