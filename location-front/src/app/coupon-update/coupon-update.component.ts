import { Component, OnInit } from '@angular/core';
import { Coupon } from '../coupon';
import { ActivatedRoute, Router } from '@angular/router';
import { CouponService } from '../coupon.service';

@Component({
  selector: 'app-coupon-update',
  templateUrl: './coupon-update.component.html',
  styleUrls: ['./coupon-update.component.css']
})
export class CouponUpdateComponent implements OnInit {

  coupon!: Coupon ;
  couponId!: number;

  constructor(private route: ActivatedRoute, private router: Router, private couponService: CouponService) { }

  ngOnInit(): void {
    this.coupon = new Coupon();
    this.couponId = this.route.snapshot.params['id'];
    this.getCouponInfo(this.couponId);
  }

  getCouponInfo(id: number): void {
    this.couponService.getCouponInfo(id)
      .subscribe(
        data => {
          this.coupon = data;
        },
        error => {
          console.log(error);
        }
      );
  }

  onSubmit(): void {
    const id = this.route.snapshot.params['id'];
    this.couponService.updateCoupon(id, this.coupon)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/coupons']);
        },
        error => {
          console.log(error);
        }
      );
  }

}
