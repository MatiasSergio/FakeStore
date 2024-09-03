
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { CardComponent } from 'src/app/shared/card/card.component';
import { CategoryModule } from './category/category.module';
import { CategorysingleComponent } from './categorysingle/categorysingle.component';
import { ProductsComponent } from './products/products.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    ShopComponent,
    CategorysingleComponent,
    ProductsComponent,
    CarouselComponent
    
  ],
  imports: [
    CategoryModule,
    CommonModule,
    ShopRoutingModule, 
    CardComponent
  ],
})
export class ShopModule { }
