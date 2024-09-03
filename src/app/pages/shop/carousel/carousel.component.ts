//Comments for enable animation sliders

import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit, OnDestroy {

  // animationClass: string = '';
  
  shift: number = 1;
  categories: string[] = [];
  products: any[] = []; 
  productsView: any[] = [];
  private intervalId: any;
  cardClass: string[] = ["sideCards","centerCard","sideCards"];


  constructor(private categoryService: CategoryService) {}
  

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      if (this.shift === 1) {this.next()};
      if (this.shift === -1) {this.prev()};
    }, 1000);
  }

  stopAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((categories) => {
      this.categories = categories;
      this.categories.forEach((category) => {
        this.categoryService.getProductsByCategory(category, 1).subscribe((product) => {
          this.products.push(product[0]);
        });
      });
      this.products = this.products.filter(product => product !== undefined);

      this.productsView = this.products;
      console.table(this.products);

    });
    this.startAutoSlide();
  }
  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  next(): void {
    this.products = this.products.filter(product => product !== undefined);
    let productAux: any; 
    let productsAux: any[] = this.products;

    productAux = productsAux.shift();
    productsAux.push(productAux);

    this.products = productsAux;
    this.productsView = this.products.slice(0, 3);
    // this.animationClass = 'slide-in-right';
    // setTimeout(() => {
    this.shift = 1;
    //   this.productAux = this.products.shift();
    //   this.products.push(this.productAux);
    //   this.resetAnimation();
    // }, 0);
  }

  prev(): void {

    this.products = this.products.filter(product => product !== undefined);
    let productAux: any; 
    let productsAux: any[] = this.products;

    productAux = productsAux.pop();
    productsAux.unshift(productAux);

    this.products = productsAux;
    this.productsView = this.products.slice(0, 3);
    // this.animationClass = 'slide-in-left';
    // setTimeout(() => {
    this.shift = -1;
    //   this.productAux = this.products.pop();
    //   this.products.unshift(this.productAux);
    //   this.resetAnimation();
    // }, 0);
  }

  // resetAnimation(): void {
  //   setTimeout(() => {
  //     this.animationClass = '';
  //   }, 500);
  // }

}
