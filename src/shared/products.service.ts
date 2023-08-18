import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //we can move this url to env
  baseURL:string = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Margarita";

  constructor(private http:HttpClient) { }

  getProductsList(){
    return this.http.get<any>(this.baseURL);
  }

  
}
