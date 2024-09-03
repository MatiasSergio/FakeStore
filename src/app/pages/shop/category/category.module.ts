
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { CardComponent } from 'src/app/shared/card/card.component';

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CardComponent
  ],
  exports: [
    CategoryComponent
  ]
})
export class CategoryModule { }
