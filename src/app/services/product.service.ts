import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Url = `${environment.apiUrl}products`;

  constructor(private http:HttpClient) { }

  getAll(): Observable<HttpResponse<any[]>>{
     return this.http.get<any[]>(this.Url, {observe:'response'}).pipe(
      catchError(err => {
        return throwError(() => new Error('No pude obtener los productos'));
      })
     )
  }
  
  getSingle(id:number): Observable<Product>{
     return this.http.get<any>(this.Url+'/'+id, {observe:'response'}).pipe(
      catchError(err => {
        return throwError(() => new Error('No existe el Producto: '+ id));
      }),
      map(json => new Product(json.body.id, json.body.title, json.body.price, json.body.category, json.body.description, json.body.image)));
  }
}
