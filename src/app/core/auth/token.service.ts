
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private tokenKey = 'auth_token';
  
  private logged = new BehaviorSubject<boolean>(false);
  authStatus$ = this.logged.asObservable();

constructor(private cookieService: CookieService) { }

setLogged() {
  this.logged.next(true);
}

setLogout() {
  this.logged.next(false);
}

isLogged(): boolean {
  return this.logged.value;
}

savetoken(token:string): void {
  this.cookieService.set(this.tokenKey,token);
  this.logged.next(true);
}

getToken():string{return this.cookieService.get(this.tokenKey)}

deleteToken(): void{
  this.cookieService.delete(this.tokenKey);
  this.logged.next(false);
}

isTokenPresent():boolean{return this.cookieService.check(this.tokenKey)}}