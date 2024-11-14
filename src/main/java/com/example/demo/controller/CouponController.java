package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.CouponCode;
import com.example.demo.service.CouponService;

@RestController
public class CouponController {
	
	@Autowired
	private CouponService couponService;
	
	@CrossOrigin
	@GetMapping(value="/ListCoupon")
	public List<CouponCode> coupons() {
		List<CouponCode> coupons = couponService.findAll();
		return coupons;

	}
	
	@CrossOrigin(origins = "http://localhost:4200")

	@GetMapping("/CouponInfo")
    public CouponCode getCouponInfo(@RequestParam("id") Long id) {
        java.util.Optional<CouponCode> coupon = couponService.findById(id);
        return coupon.orElse(null);
    } 
	
	@CrossOrigin
	@PostMapping("/AddCoupon")
    public CouponCode addCoupon(@RequestBody CouponCode coupon) {
        // Traiter et valider la maison reçue
        
		CouponCode nouvelleCoupon = new CouponCode();
		nouvelleCoupon.setNom(coupon.getNom());
		nouvelleCoupon.setVal(coupon.getVal());
        
        
        // Sauvegarder la nouvelle maison dans la base de données
        
		nouvelleCoupon = couponService.save(nouvelleCoupon);
        
        return nouvelleCoupon;
    }
	
	@CrossOrigin
	@PutMapping("/Coupon/{id}")
    public CouponCode updateCoupon(@PathVariable("id") Long id, @RequestBody CouponCode couponDetails) {
        Optional<CouponCode> optionalCoupon = couponService.findById(id);

        if (optionalCoupon.isPresent()) {
        	CouponCode coupon = optionalCoupon.get();
            
            // Mettre à jour les champs de la maison avec les détails reçus
            
            coupon.setNom(couponDetails.getNom());
            coupon.setVal(couponDetails.getVal());
            
            
            // Enregistrer la maison mise à jour dans la base de données
            
            coupon = couponService.save(coupon);
            
            return coupon;
        } else {
            return null; // Ou renvoyer une réponse appropriée en cas de maison non trouvée
        }
    }
	@CrossOrigin
	@DeleteMapping("/removeCoupon/{id}")
    public ResponseEntity<String> removeOne(@PathVariable("id") long id) {
        couponService.removeOne(id);
        return ResponseEntity.ok("Coupon code removed successfully");
    }

}
