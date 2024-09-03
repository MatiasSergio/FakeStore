
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './shared/detail/detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/shop/products', pathMatch: 'full' }, 
  {path: 'shop', loadChildren: () => import('./pages/shop/shop.module').then(m => m.ShopModule) },
  {path: 'login', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  {path: "product/:id", component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
