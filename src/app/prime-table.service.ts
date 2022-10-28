import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrimeTableService {

  constructor(private http: HttpClient) { }
   
  getDetails(params?: any)
  {
    return this.http.get<any>('assets/products.json',{params:params})
  }
}
