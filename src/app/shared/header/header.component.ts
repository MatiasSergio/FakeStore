
import {Component, HostListener, OnChanges, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/core/auth/token.service';
import { CategoryService } from 'src/app/services/category.service';
import { DataserviceService } from 'src/app/services/dataservice.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit, OnChanges {

  data: any;
  isLogged: boolean = true;
  

  constructor(private router: Router,  private categoryService: CategoryService, private dataService: DataserviceService,private tokenService: TokenService) {
    this.dataService.data$.subscribe(res=>{
      this.data = res;
    })
  }

  moveCentralBar: boolean = true;
  categories: string[] = [];


  ngOnInit(): void {
    this.getAllCategories();
    this.dataService.data$.subscribe(res=>{
      this.data = res;
    })
    console.log(this.tokenService.isLogged());
  
  }



  ngOnChanges(): void {
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

  onCategorySelected(event: any): void {
    const selectedCategory = event.value;
    this.router.navigate(['shop/category', selectedCategory]);
  }

  @HostListener (
    'window:scroll',['$event'])
  onScroll(event:Event): void{
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition === 0){
      this.moveCentralBar = true;
    } else {
      this.moveCentralBar = false;
    }
  }
  
  fakeStoreClickHandle() {
    this.router.navigate(['']);
  }

  loginClickHandle() {
    this.router.navigate(['login']);
  }

  logoutClickHandle(){
    this.tokenService.deleteToken();
  }
}
