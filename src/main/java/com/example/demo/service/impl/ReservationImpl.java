package com.example.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repository.ReservationRepository;
import com.example.demo.service.ReservationService;


@Service
public class ReservationImpl implements ReservationService {
	@Autowired
	private ReservationRepository reservationRepository ;
	
	@Override
	public long getTotalReservation() {
        return reservationRepository.count();
    }
	
	@Override
	 public String getMostUsedAddress() {
        List<String> mostUsedAddresses = reservationRepository.findMostUsedAddress();
        if (mostUsedAddresses != null && !mostUsedAddresses.isEmpty()) {
            return mostUsedAddresses.get(0);
        } else {
            // Handle the case where there are no reservations
            return null;
        }
    }

	@Override
	public double getTotalReservationPrice() {
        return reservationRepository.getTotalPrice();
    }
	
	@Override
	public List<Object[]> getAddressReservationStats() {
        return reservationRepository.getAddressReservationStats();
    }
	
	 @Override
	    public List<Object[]> getReservationStatsByMonth() {
	        return reservationRepository.getReservationStatsByMonth();
	    }

	

}
