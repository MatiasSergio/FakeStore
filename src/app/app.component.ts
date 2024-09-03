
import { Component, OnInit } from '@angular/core';
import { DataserviceService } from './services/dataservice.service';
import { TokenService } from './core/auth/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

   constructor(private dataService: DataserviceService, private tokenService: TokenService){};
   isLogged: boolean = true;
   
ngOnInit(): void {
    this.dataService.loadData().subscribe();
    if (this.tokenService.isTokenPresent()) {
      this.tokenService.setLogged();
    }
}

}
