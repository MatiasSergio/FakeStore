
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule,MatIconModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{

  productDetail: Product = new Product(1,"","","","","");
  
  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id){ this.getProductDetails(Number.parseInt(id)) }
    });
  }

  getProductDetails(id: number) {
      this.productService.getSingle(id).subscribe(
        (res) => { if (res){this.productDetail = res} },
        (error) => {console.error('Error al obtener el producto', error);}
      );
    }
}
