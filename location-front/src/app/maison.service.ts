import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Maison } from './maison';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaisonService {
 

  private baseURL = "http://localhost:8088/ListMaison";

  private baseURL1 = "http://localhost:8088/AddMaison";
  private baseURL2 = "http://localhost:8088";
  private baseURL3 = "http://localhost:8088/maisons";
  private apiUrl = 'http://localhost:8088/search';

  
  


  constructor(private httpClient: HttpClient) {}
    getMaisonsList(): Observable<Maison[]>{
      return this.httpClient.get<Maison[]>(`${this.baseURL}?_embed=category`);
    }

    createMaison(maison: Maison): Observable<Object>{
      
      return this.httpClient.post(`${this.baseURL1}`, maison);
    }

    
    updateMaison(id: number, maison: Maison): Observable<Maison> {
      return this.httpClient.put<Maison>(`${this.baseURL2}/Maison/${id}`, maison);
    }

    getMaisonInfo(id: number): Observable<Maison> {
      return this.httpClient.get<Maison>(`${this.baseURL2}/MaisonInfo?id=${id}`);
    }

    removeMaison(id: number): Observable<Maison> {
      return this.httpClient.delete<Maison>(`${this.baseURL2}/remove/${id}`);
    }

    getMaisonsOrderByAscending(): Observable<Maison[]> {
      return this.httpClient.get<Maison[]>(`${this.baseURL3}/orderByAscending`);
    }
    getMaisonsOrderByDescending(): Observable<Maison[]> {
      return this.httpClient.get<Maison[]>(`${this.baseURL3}/orderbydescending`);
    }
    getMaisonsOrderByAscending1(): Observable<Maison[]> {
      return this.httpClient.get<Maison[]>(`${this.baseURL3}/orderByAscending1`);
    }
    getMaisonsOrderByDescending1(): Observable<Maison[]> {
      return this.httpClient.get<Maison[]>(`${this.baseURL3}/orderbydescending1`);
    }

    searchByPropertyName(nom: string): Observable<Maison[]> {
      const url = `${this.baseURL2}/searchh?nom=${nom}`;
      return this.httpClient.get<Maison[]>(url);
    }

    searchMaisons(nom: string, adress: string, priceRange: number | null, categoryId: number | null): Observable<Maison[]> {
      let params = new HttpParams();
      if (nom) {
        params = params.set('nom', nom);
      }
      if (adress) {
        params = params.set('adress', adress);
      }
      if (priceRange !== null) {
        params = params.set('priceRange', priceRange.toString());
      }
      if (categoryId !== null) {
        params = params.set('categoryId', categoryId.toString());
      }
  
      return this.httpClient.get<Maison[]>(`${this.apiUrl}`, { params });
    }
    getTotalMaison(): Observable<number> {
      return this.httpClient.get<number>(`${this.baseURL2}/total-maisons`);
    }

    getTotalReservation(): Observable<number> {
      return this.httpClient.get<number>(`${this.baseURL2}/total-reservations`);

    }
    getMostUsedAddress(): Observable<string> {
      return this.httpClient.get(`${this.baseURL2}/most-used-address`, { responseType: 'text' });
    }

    getTotalReservationPrice(): Observable<number> {
      return this.httpClient.get<number>(`${this.baseURL2}/total-price`);
    }

    getAddressReservationStats() {
      return this.httpClient.get<any[]>(`${this.baseURL2}/address-reservation-stats`);
    }

    getReservationsByMonth(): Observable<any[]> {
      return this.httpClient.get<any[]>(`${this.baseURL2}/stats-by-month`);
    }
   
}
