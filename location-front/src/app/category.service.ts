import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseURL = "http://localhost:8088/ListCategory";
  private baseURL1 = "http://localhost:8088/AddCategory";
  private baseURL2 = "http://localhost:8088";
  


  constructor(private httpClient: HttpClient) {}
    getCategoriesList(): Observable<Category[]>{
      return this.httpClient.get<Category[]>(`${this.baseURL}`);
    }
    createCategory(cat: Category): Observable<Object>{
      return this.httpClient.post(`${this.baseURL1}`, cat);
    }

    
    updateCategory(id: number, cat: Category): Observable<Category> {
      return this.httpClient.put<Category>(`${this.baseURL2}/updateCategory/${id}`, cat);
    }

    getCategoryInfo(id: number): Observable<Category> {
      return this.httpClient.get<Category>(`${this.baseURL2}/CategoryInfo?id=${id}`);
    }

    removeCategory(id: number): Observable<Category> {
      return this.httpClient.delete<Category>(`${this.baseURL2}/removeCategory/${id}`);
    }
}
