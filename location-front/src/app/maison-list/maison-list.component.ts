import { Component,  OnInit } from '@angular/core';
import { Maison } from '../maison';
import { MaisonService } from '../maison.service';
import { Router } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { tap } from 'rxjs/operators';





@Component({
  selector: 'app-maison-list',
  templateUrl: './maison-list.component.html',
  styleUrls: ['./maison-list.component.css']
})
export class MaisonListComponent implements OnInit {

 

  maisons!: Maison[];
  categories!: Category[];
  searchTerm: string = '';

  constructor(private maisonService : MaisonService ,private router: Router ,  private categoryService: CategoryService,) { 
    
  }

  ngOnInit(): void {
    this.getMaisons() ;
    this.getCategories() ;
    
    
    
    
  }


  

  
  private getCategories() {
    this.categoryService.getCategoriesList().subscribe(data => {
      this.categories = data;
    });
  }
  searchMaisons() {
    // Filter maisons based on the search term
    this.maisonService.searchByPropertyName(this.searchTerm).subscribe(data => {
      this.maisons = data;
      console.log(data);
    });
  }

  private getMaisons() {
    this.maisonService.getMaisonsList().subscribe(data => {
      this.maisons = data;
      console.log(data)
        
    });
  }

  maisonDetails(id: number){
    this.router.navigate(['maison-details', id]);
  }

  updateMaison(id: number){
    this.router.navigate(['update-maison', id]);
  }

  removeMaison(id: number) {
    this.maisonService.removeMaison(id).subscribe(
      data => {
        console.log(data);
        this.getMaisons;      },
      error => {
        console.log(error);
      }
    );
  }

}
