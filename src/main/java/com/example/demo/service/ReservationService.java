package com.example.demo.service;

import java.util.List;

public interface ReservationService {
	 public long getTotalReservation() ;
	 public double getTotalReservationPrice() ;
	 public String getMostUsedAddress() ;
	 public List<Object[]> getAddressReservationStats() ;
	 public  List<Object[]> getReservationStatsByMonth();

}
