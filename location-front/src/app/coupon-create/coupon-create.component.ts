import { Component, OnInit } from '@angular/core';
import { Coupon } from '../coupon';
import { CouponService } from '../coupon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupon-create',
  templateUrl: './coupon-create.component.html',
  styleUrls: ['./coupon-create.component.css']
})
export class CouponCreateComponent implements OnInit {

  coupon: Coupon= new Coupon();

  constructor(private couponService: CouponService,
    private router: Router
    ) { }

  ngOnInit(): void {
    
  }
  saveCoupon(){
    this.couponService.createCoupon(this.coupon).subscribe( data =>{
    
      this.goToCouponList();
    },
    error => console.log(error));
  }

  goToCouponList(){
    this.router.navigate(['/coupons']);
  }
  
  onSubmit(){
    console.log(this.coupon);
    this.saveCoupon();
  }

}
