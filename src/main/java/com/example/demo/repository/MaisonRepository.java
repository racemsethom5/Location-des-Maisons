package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.Category;
import com.example.demo.model.Maison;


public interface MaisonRepository extends JpaRepository<Maison, Long> {
	
Optional<Maison> findById(Long id);
	
	public List<Maison> findAll();
	public List<Maison> findByCat_Id( long cat );

    Optional<Maison> findByNom(String nom);
    
    long count(); // Get the total count of Maiosns

    
    @Query("from Maison order by price desc")
	public List<Maison> orderByDescending();
    
    @Query("from Maison order by price asc")
	public List<Maison> orderByAscending();
    
    @Query("from Maison order by id desc")
	public List<Maison> orderByDescending1();
    
    @Query("from Maison order by id asc")
	public List<Maison> orderByAscending1();
    
    @Query("SELECT m FROM Maison m WHERE m.nom LIKE %:nom%")
    public List<Maison> searchByPropertyName(@Param("nom") String nom);
    
    @Query("SELECT m FROM Maison m WHERE m.adress LIKE %:adress%")
    public List<Maison> searchByAdress(@Param("adress") String adress);
    
    @Query("SELECT m FROM Maison m WHERE (:price = 1 OR (m.price >= 0 AND m.price < 100)) " +
            "AND (:price = 2 OR (m.price >= 100 AND m.price <= 200)) " +
            "AND (:price = 3 OR (m.price >= 200 AND m.price <= 300)) " +
            "AND (:price = 4 OR (m.price >= 300 AND m.price <= 400)) " +
            "AND (:price = 5 OR m.price >= 400)")
    public List<Maison> searchByPrice(@Param("price") int price);
    
    
    @Query("SELECT m FROM Maison m WHERE " +
    	       "(:nom IS NULL OR m.nom LIKE %:nom%) " +
    	       "AND (:adress IS NULL OR m.adress LIKE %:adress%) " +
    	       "AND (:priceRange IS NULL OR " +
    	       "  (m.price < 100.0 AND :priceRange = 1) OR " +
    	       "  (m.price >= 100.0 AND m.price <= 200.0 AND :priceRange = 2) OR " +
    	       "  (m.price >= 200.0 AND m.price <= 300.0 AND :priceRange = 3) OR " +
    	       "  (m.price >= 300.0 AND m.price <= 400.0 AND :priceRange = 4) OR " +
    	       "  (m.price >= 400.0 AND :priceRange = 5)) " +
    	       "AND (:categoryId IS NULL OR m.cat.id = :categoryId OR :categoryId = -1)")
    	List<Maison> searchByCriteria(@Param("nom") String nom,
    	                              @Param("adress") String adress,
    	                              @Param("priceRange") Integer priceRange,
    	                              @Param("categoryId") Long categoryId);
}

