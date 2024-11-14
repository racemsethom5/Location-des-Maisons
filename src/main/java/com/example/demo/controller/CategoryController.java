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

import com.example.demo.model.Category;
import com.example.demo.service.CategoryService;

@RestController
public class CategoryController {
	@Autowired
	private CategoryService categoryService;
	
	@CrossOrigin
	@GetMapping(value="/ListCategory")
	public List<Category> categories() {
		List<Category> categories = categoryService.findAll();
		return categories;

	}
	
	@CrossOrigin(origins = "http://localhost:4200")

	@GetMapping("/CategoryInfo")
    public Category getCategoryInfo(@RequestParam("id") Long id) {
        java.util.Optional<Category> category = categoryService.findById(id);
        return category.orElse(null);
    } 
	
	@CrossOrigin
	@PostMapping("/AddCategory")
    public Category addCategory(@RequestBody Category cat) {
        // Traiter et valider la Category reçue
        
		Category nouvelleCategory = new Category();
		nouvelleCategory.setNom(cat.getNom());
		nouvelleCategory.setDescription(cat.getDescription());
        
        
        // Sauvegarder la nouvelle Category dans la base de données
        
		nouvelleCategory = categoryService.save(nouvelleCategory);
        
        return nouvelleCategory;
    }
	
	@CrossOrigin
	@PutMapping("/updateCategory/{id}")
    public Category updateCategory(@PathVariable("id") Long id, @RequestBody Category CategoryDetails) {
        Optional<Category> optionalCategory = categoryService.findById(id);

        if (optionalCategory.isPresent()) {
        	Category cat = optionalCategory.get();
            
            // Mettre à jour les champs de la maison avec les détails reçus
            
            cat.setNom(CategoryDetails.getNom());
            cat.setDescription(CategoryDetails.getDescription());
            
            
            // Enregistrer la maison mise à jour dans la base de données
            
            cat = categoryService.save(cat);
            
            return cat;
        } else {
            return null; // Ou renvoyer une réponse appropriée en cas de maison non trouvée
        }
    }
	@CrossOrigin
	@DeleteMapping("/removeCategory/{id}")
    public ResponseEntity<String> removeOne(@PathVariable("id") long id) {
        categoryService.removeOne(id);
        return ResponseEntity.ok("Category code removed successfully");
    }

}
