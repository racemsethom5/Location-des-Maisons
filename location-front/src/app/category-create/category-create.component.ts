import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  cat: Category= new Category();

  constructor(private catService: CategoryService,
    private router: Router
    ) { }

  ngOnInit(): void {
    
  }
  saveCategory(){
    this.catService.createCategory(this.cat).subscribe( data =>{
    
      this.goToCategoryList();
    },
    error => console.log(error));
  }

  goToCategoryList(){
    this.router.navigate(['/categories']);
  }
  
  onSubmit(){
    console.log(this.cat);
    this.saveCategory();
  }

}
