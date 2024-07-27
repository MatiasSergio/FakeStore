import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  Url = `${environment.apiUrl}products/categories`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    console.log('Obteniendo las categorías de productos...');
    return this.http.get<any[]>(this.Url).pipe(
      catchError(err => {
        console.log(err.message);
        return throwError(() => new Error('Ocurrió un error al obtener las categorías de productos'));
      })
    );
  }


  
  getProductsByCategory(category: string, limit: number): Observable<any[]> {
  
    const categoryUrl = limit > 0 ? 
    `https://fakestoreapi.com/products/category/${category}?limit=${limit}` : 
    `https://fakestoreapi.com/products/category/${category}`;

    return this.http.get<any[]>(categoryUrl).pipe(
      catchError(err => {
        console.log(err.message);
        return throwError(() => new Error(`Ocurrió un error al obtener los productos de la categoría: ${category}`));
      })
    );
  }

}
