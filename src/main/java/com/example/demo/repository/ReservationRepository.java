package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation , Long > {
	 long count(); // Get the total count of resevation
	 
	 @Query("SELECT COALESCE(SUM(r.totalprice), 0) FROM Reservation r")
	    double getTotalPrice();
	 
	 @Query("SELECT r.adress FROM Reservation r GROUP BY r.adress ORDER BY COUNT(r) DESC")
	    List<String> findMostUsedAddress();
	 
	 @Query("SELECT r.adress AS address, COUNT(r) AS numberOfReservations, SUM(r.totalprice) AS totalPrice " +
	            "FROM Reservation r GROUP BY r.adress")
	    List<Object[]> getAddressReservationStats();
	    
	    
	    @Query("SELECT FUNCTION('MONTHNAME', r.registrationDate), COUNT(r) FROM Reservation r GROUP BY FUNCTION('MONTHNAME', r.registrationDate)")
	    List<Object[]> getReservationStatsByMonth();

}
