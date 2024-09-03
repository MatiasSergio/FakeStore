
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private dataSubjet = new BehaviorSubject<any>(null);
  data$ = this.dataSubjet.asObservable();

  constructor(private http: HttpClient) { }
  lang = "en"
  loadData(lang: string = 'en'): Observable<any>{
    return this.http.get(`/assets/i18n/${lang}.json`).pipe (tap(data=> this.dataSubjet.next(data))); 
  }

}
