import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.complete";
import { Category, ProductsResponse } from "../models/supermarket.interfaces";
@Injectable({
  providedIn: 'root'
})
export class SupermarketApi{
  private baseUrl = environment.apiUrl

  constructor(private http: HttpClient){}

  getAllProducts(page:number): Promise<ProductsResponse>{
    const apiUrl = this.baseUrl + '/products/page/' + page;
    return this.http.get<ProductsResponse>(apiUrl).toPromise()
  }
  
  getAllCategories(): Promise<Category[]>{
    const apiUrl = this.baseUrl + '/categories';
    return this.http.get<Category[]>(apiUrl).toPromise()
  }
  getAllCategories$(): Observable<Category[]>{
    const apiUrl = this.baseUrl + '/categories';
    return this.http.get<Category[]>(apiUrl)
  }

}