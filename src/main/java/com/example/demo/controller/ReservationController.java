package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.ReservationService;

@RestController
public class ReservationController {
	@Autowired
	private ReservationService reservationService;
	
	@CrossOrigin
	@GetMapping("/total-reservations")
    public long getTotalReservation() {
        return reservationService.getTotalReservation();
    }
	
	@CrossOrigin
	@GetMapping("/total-price")
    public double getTotalReservationPrice() {
        return reservationService.getTotalReservationPrice();
    }
	
	@CrossOrigin
	/*@GetMapping("/most-used-address")
    public ResponseEntity<String> getMostUsedAddress() {
        String mostUsedAddress = reservationService.getMostUsedAddress();
        if (mostUsedAddress != null) {
        	Map<String, String> response = new HashMap<>();
            response.put("adress", mostUsedAddress);
            return ResponseEntity.ok(mostUsedAddress);
        } else {
            return ResponseEntity.notFound().build();
        }
    }*/
	 @GetMapping(value = "/most-used-address", produces = MediaType.TEXT_PLAIN_VALUE)
    public ResponseEntity<String> getMostUsedAddress() {
        String mostUsedAddress = reservationService.getMostUsedAddress();
        if (!mostUsedAddress.isEmpty()) {
            return ResponseEntity.ok(mostUsedAddress);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
	
	@CrossOrigin
	 @GetMapping("/address-reservation-stats")
	    public ResponseEntity<List<Object[]>> getAddressReservationStats() {
	        List<Object[]> addressReservationStats = reservationService.getAddressReservationStats();
	        return ResponseEntity.ok(addressReservationStats);
	    }
	
	@CrossOrigin
	@GetMapping("/stats-by-month")
    public ResponseEntity<List<Object[]>> getReservationStatsByMonth() {
        List<Object[]> reservationStats = reservationService.getReservationStatsByMonth();
        return ResponseEntity.ok(reservationStats);
    }

}
