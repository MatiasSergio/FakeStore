import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private tokenKey = 'auth_token';

constructor(private cookieService: CookieService) { }

savetoken(token:string): void {this.cookieService.set(this.tokenKey,token)}

getToken():string{return this.cookieService.get(this.tokenKey)}

deleteToken(): void{this.cookieService.delete(this.tokenKey)}

isTokenPresent():boolean{return this.cookieService.check(this.tokenKey)}

}