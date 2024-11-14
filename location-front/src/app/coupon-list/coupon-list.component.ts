import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CouponService } from '../coupon.service';
import { Coupon } from '../coupon';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.css']
})
export class CouponListComponent implements OnInit {

  coupons!: Coupon[];

  constructor(private couponService : CouponService ,private router: Router) { 
    
  }

  ngOnInit(): void {
    this.getCoupons() ;
    
  }

  private getCoupons(){
    this.couponService.getCouponList().subscribe(data => {
      this.coupons = data;
    });
  }

  updateCoupon(id: number){
    this.router.navigate(['update-coupon', id]);
  }

  CouponDetails(id: number){
    this.router.navigate(['category-details', id]);
  }



  removeCoupon(id: number) {
    this.couponService.removeCoupon(id).subscribe(
      data => {
        console.log(data);
        this.getCoupons;      },
      error => {
        console.log(error);
      }
    );
  }


}
