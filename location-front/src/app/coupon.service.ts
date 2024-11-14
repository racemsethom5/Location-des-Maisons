import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coupon } from './coupon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  private baseURL = "http://localhost:8088/ListCoupon";

  private baseURL1 = "http://localhost:8088/AddCoupon";
  private baseURL2 = "http://localhost:8088";
  
  


  constructor(private httpClient: HttpClient) {}
    getCouponList(): Observable<Coupon[]>{
      return this.httpClient.get<Coupon[]>(`${this.baseURL}`);
    }

    createCoupon(coupon: Coupon): Observable<Object>{
      return this.httpClient.post(`${this.baseURL1}`, coupon);
    }

    
    updateCoupon(id: number, coupon: Coupon): Observable<Coupon> {
      return this.httpClient.put<Coupon>(`${this.baseURL2}/Coupon/${id}`, coupon);
    }

    getCouponInfo(id: number): Observable<Coupon> {
      return this.httpClient.get<Coupon>(`${this.baseURL2}/CouponInfo?id=${id}`);
    }

    removeCoupon(id: number): Observable<Coupon> {
      return this.httpClient.delete<Coupon>(`${this.baseURL2}/removeCoupon/${id}`);
    }
}
