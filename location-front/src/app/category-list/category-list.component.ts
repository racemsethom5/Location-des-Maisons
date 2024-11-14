import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories!: Category[];

  constructor(private catService : CategoryService ,private router: Router) { 
    
  }

  ngOnInit(): void {
    this.getCategories() ;
    
  }

  private getCategories(){
    this.catService.getCategoriesList().subscribe(data => {
      this.categories = data;
    });
  }

  updateCategory(id: number){
    this.router.navigate(['update-category', id]);
  }

  CategoryDetails(id: number){
    this.router.navigate(['category-details', id]);
  }



  removeCategory(id: number) {
    this.catService.removeCategory(id).subscribe(
      data => {
        console.log(data);
        this.getCategories;      },
      error => {
        console.log(error);
      }
    );
  }

 

}
