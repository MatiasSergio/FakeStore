
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input()
  category!: string;
  @Input()
  limit!: number;

  products: any[] = [];


  constructor(private categoryService: CategoryService, private router: Router) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.categoryService.getProductsByCategory(this.category, this.limit).subscribe(
      (data: any[]) => {
        this.products = data;
      },
      (error) => {
        console.error(`Error al obtener los productos de la categoría ${this.category}`, error);
      }
    );
  }

  categoryClickHandle() {
    this.router.navigate(['shop/category', this.category]);
  }

}
