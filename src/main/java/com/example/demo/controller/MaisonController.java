package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.support.AbstractMultipartHttpServletRequest;

import com.example.demo.model.Category;
import com.example.demo.model.Maison;
import com.example.demo.service.CategoryService;
import com.example.demo.service.MaisonService;


@RestController
public class MaisonController {
	@Autowired
	private MaisonService maisonService;
	
	@Autowired
	private CategoryService categoryService;
	
	/*@CrossOrigin
	@GetMapping(value="/ListMaison")
	public List<Maison> maisons() {
		List<Maison> maisons = maisonService.findAll();
		return maisons;

	}*/
	
	@CrossOrigin
	@GetMapping(value="/ListMaison")
	public List<Maison> getMaisons() {
	    List<Maison> maisons = maisonService.findAll();
	    
	    // Fetch and populate category data for each maison
	    /*for (Maison maison : maisons) {
	        Long categoryId = maison.getCat().getId();
	        Optional<Category> category = categoryService.findById(categoryId);
	        category.ifPresent(maison::setCat);
	    }*/
	    
	    return maisons;
	}
	@CrossOrigin(origins = "http://localhost:4200")

	@GetMapping("/MaisonInfo")
    public Maison getMaisonInfo(@RequestParam("id") Long id) {
        java.util.Optional<Maison> maison = maisonService.findById(id);
        return maison.orElse(null);
    }
	@CrossOrigin
	@PostMapping("/AddMaison")
    public Maison addMaison(@RequestBody Maison maison) {
        // Traiter et valider la maison reçue
        
        Maison nouvelleMaison = new Maison();
        nouvelleMaison.setNom(maison.getNom());
        nouvelleMaison.setPrice(maison.getPrice());
        nouvelleMaison.setAdress(maison.getAdress());
        nouvelleMaison.setDescription(maison.getDescription());
        nouvelleMaison.setEtat(maison.getEtat());
       // nouvelleMaison.setCat(maison.getCat());
        Category existingCategory = categoryService.findById(maison.getCat().getId()).orElse(null);
        if (existingCategory != null) {
            nouvelleMaison.setCat(existingCategory);
            
        } else {
            System.out.println("Category does not exist");
        }

        
        // Sauvegarder la nouvelle maison dans la base de données
        
        nouvelleMaison = maisonService.save(nouvelleMaison);
        
        return nouvelleMaison;
    }
	@CrossOrigin
	@PutMapping("/Maison/{id}")
    public Maison updateMaison(@PathVariable("id") Long id, @RequestBody Maison maisonDetails) {
        Optional<Maison> optionalMaison = maisonService.findById(id);

        if (optionalMaison.isPresent()) {
            Maison maison = optionalMaison.get();
            
            // Mettre à jour les champs de la maison avec les détails reçus
            
            maison.setNom(maisonDetails.getNom());
            maison.setPrice(maisonDetails.getPrice());
            maison.setAdress(maisonDetails.getAdress());
            maison.setDescription(maisonDetails.getDescription());
            maison.setEtat(maisonDetails.getEtat());
           /* if (maisonDetails.getCat() != null) {
                Category updatedCategory = categoryService.findByNom(maisonDetails.getCat().getNom())
                        .orElseThrow(() -> new RuntimeException("La catégorie spécifiée n'existe pas"));
                maison.setCat(updatedCategory);
            }*/
            maison.setCat(maisonDetails.getCat());
           
            
            // Enregistrer la maison mise à jour dans la base de données
            
            maison = maisonService.save(maison);
            
            return maison;
        } else {
            return null; // Ou renvoyer une réponse appropriée en cas de maison non trouvée
        }
    }
	@CrossOrigin
	@DeleteMapping("/remove/{id}")
    public ResponseEntity<String> removeOne(@PathVariable("id") long id) {
        maisonService.removeOne(id);
        return ResponseEntity.ok("Maison removed successfully");
    }
	
	@CrossOrigin
	@GetMapping("/maisons/orderbydescending")
    public List<Maison> getMaisonsOrderByDescending() {
        return maisonService.orderByDescending();
    }
	@CrossOrigin
	@GetMapping("/maisons/orderByAscending")
    public List<Maison> getMaisonsOrderByAscending() {
        return maisonService.orderByAscending();
    }
	
	
	@CrossOrigin
	@GetMapping("/maisons/orderbydescending1")
    public List<Maison> getMaisonsOrderByDescending1() {
        return maisonService.orderByDescending1();
    }
	@CrossOrigin
	@GetMapping("/maisons/orderByAscending1")
    public List<Maison> getMaisonsOrderByAscending1() {
        return maisonService.orderByAscending1();
    }
	
	@CrossOrigin
	 @GetMapping("/search")
    public List<Maison> searchMaisons(@RequestParam(value = "nom", required = false) String nom,
                                      @RequestParam(value = "adress", required = false) String adress,
                                      @RequestParam(value = "priceRange", required = false) Integer priceRange,
                                      @RequestParam(value = "categoryId", required = false) Long categoryId) {
        return maisonService.searchByCriteria(nom, adress,  priceRange, categoryId);
    }
	@CrossOrigin
	@GetMapping("/total-maisons")
    public long getTotalMaison() {
        return maisonService.getTotalMaison();
    }
	@CrossOrigin
	@GetMapping("/searchh")
    public ResponseEntity<List<Maison>> searchByPropertyName(@RequestParam String nom) {
        List<Maison> maisons = maisonService.searchByPropertyName(nom);
        return ResponseEntity.ok(maisons);
    }


}
