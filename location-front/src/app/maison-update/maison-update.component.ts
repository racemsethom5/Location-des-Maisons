import { Component, OnInit } from '@angular/core';
import { Maison } from '../maison';
import { MaisonService } from '../maison.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';






@Component({
  selector: 'app-maison-update',
  templateUrl: './maison-update.component.html',
  styleUrls: ['./maison-update.component.css']
})
export class MaisonUpdateComponent implements OnInit {

  maison!: Maison ;
  maisonId!: number;
  selectedCategory!: Category;
  categories!: Category[];

  constructor(private route: ActivatedRoute, private router: Router, private maisonsService: MaisonService , private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.maison = new Maison();
    this.maisonId = this.route.snapshot.params['id'];
    this.getMaisonInfo(this.maisonId);
    this.loadCategories();
  }

  getMaisonInfo(id: number): void {
    this.maisonsService.getMaisonInfo(id)
      .subscribe(
        data => {
          this.maison = data;
          

        },
        error => {
          console.log(error);
        }
      );
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
  }

  onSubmit(): void {
    if (this.selectedCategory && this.selectedCategory.id) {
      this.maison.cat = new Category();
      this.maison.cat = {
      
        
          id: this.selectedCategory.id,
          nom: this.selectedCategory.nom,
          description: this.selectedCategory.description
        
      };
      console.log(this.maison)
    const id = this.route.snapshot.params['id'];
    this.maisonsService.updateMaison(id, this.maison)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/maisons']);
        },
        error => {
          console.log(error);
        }
      );
  }
}
}
