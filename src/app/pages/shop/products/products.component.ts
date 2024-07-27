
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    categories: string[] = [];
  
    constructor(private categoryService: CategoryService) { }
  
    ngOnInit(): void {
      this.getAllCategories();
    }
  
    getAllCategories(): void {
      this.categoryService.getAll().subscribe(
        (data: string[]) => {
          this.categories = data;
        },
        (error) => {
          console.error('Error al obtener las categorías', error);
        }
      );
    }

}
