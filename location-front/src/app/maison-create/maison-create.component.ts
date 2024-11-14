import { Component, OnInit } from '@angular/core';
import { Maison } from '../maison';
import { MaisonService } from '../maison.service';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-maison-create',
  templateUrl: './maison-create.component.html',
  styleUrls: ['./maison-create.component.css']
})
export class MaisonCreateComponent implements OnInit {

  maison: Maison = new Maison();
  categories!: Category[];
  selectedCategory!: Category;
 
  category!: Category ;
  
  constructor(private maisonService: MaisonService, private categoryService: CategoryService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loadCategories();
    
  }
  loadCategories() {
    this.categoryService.getCategoriesList().subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  assignCorporationToManage(selectedId) {
    console.log(selectedId)
    this.selectedCategory = this.categories.filter(cat=>cat.id == selectedId)[0]
    //console.log(this.selectedCategory)
    //this.maison.category.id = selectedId ;
}

  saveMaison() {
    if (this.selectedCategory && this.selectedCategory.id) {
      this.maison.cat = new Category();
      this.maison.cat = {
      
        
          id: this.selectedCategory.id,
          nom: this.selectedCategory.nom,
          description: this.selectedCategory.description
        
      };
      console.log(this.maison)
      
      this.maisonService.createMaison(this.maison).subscribe(
        data => {
          this.goToMaisonList();
        },
        error => console.log(error)
      );
    }
  }

  goToMaisonList(){
    this.router.navigate(['/maisons']);
  }
  
  onSubmit(){
    console.log(this.maison);
    this.saveMaison();
  }

}
