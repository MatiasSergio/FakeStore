import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Observable,  throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private  url = 'https://fakestoreapi.com/auth/login';
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  login(username: string, password: string): Observable<any> {
    console.log('Realizando solicitud de inicio de sesión');
    return this.http.post<any>(this.url, JSON.stringify({ username, password }), { headers: {'Content-Type': 'application/json'} }).pipe(
      catchError(error => {
        console.error('Error en la solicitud de inicio de sesión:', error);
        return throwError(error);
      }),
      map(response => {
        console.log('Respuesta del servidor:', response);
        if (response && response.token) {
          this.tokenService.savetoken(response.token);
          
          console.log('Token guardado en la cookie:', response.token);
        }
        return response;
      })
    );
  }
}