
import {Component, HostListener, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class HeaderComponent {

  constructor(private router: Router) {}

  showTopBar: boolean = true;
  showBottomBar: boolean = true;

  @HostListener (
    'window:scroll',['$event'])
  onScroll(event:Event): void{
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition === 0){
      this.showTopBar = true;
      this.showBottomBar = true;
    } else {
      this.showTopBar = false;
      this.showBottomBar = false;
    }
  }
  

  fakeStoreClickHandle() {
    this.router.navigate(['']);
  }

}
