import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/category';
import { CategoryService } from 'src/app/category.service';
import { Maison } from 'src/app/maison';
import { MaisonService } from 'src/app/maison.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  maisons!: Maison[];
  categories!: Category[];
  selectedSortingOption = 'all';

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

  public getMaisons() {
    if (this.selectedSortingOption === 'min') {
      this.maisonService.getMaisonsOrderByAscending()
        .subscribe(maisons => {
          this.maisons = maisons;
        }, error => {
          console.log(error);
        });
    } else if (this.selectedSortingOption === 'max') {
      this.maisonService.getMaisonsOrderByDescending()
        .subscribe(maisons => {
          this.maisons = maisons;
        }, error => {
          console.log(error);
        });
    } else if (this.selectedSortingOption === 'desc') {
      this.maisonService.getMaisonsOrderByDescending1()
        .subscribe(maisons => {
          this.maisons = maisons;
        }, error => {
          console.log(error);
        });
    } else if (this.selectedSortingOption === 'asc') {
      this.maisonService.getMaisonsOrderByAscending1()
        .subscribe(maisons => {
          this.maisons = maisons;
        }, error => {
          console.log(error);
        });
    }
    
    
    else {
    this.maisonService.getMaisonsList().subscribe(data => {
      this.maisons = data;
      console.log(data)
        
    }); }

    
  }

  maisonDetails(id: number){
    this.router.navigate(['details-maison', id]);
  }

  

}
