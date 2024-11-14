import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {

  cat!: Category ;
  catId!: number;

  constructor(private route: ActivatedRoute, private router: Router, private catService: CategoryService) { }

  ngOnInit(): void {
    this.cat = new Category();
    this.catId = this.route.snapshot.params['id'];
    this.getCategoryInfo(this.catId);
  }

  getCategoryInfo(id: number): void {
    this.catService.getCategoryInfo(id)
      .subscribe(
        data => {
          this.cat = data;
        },
        error => {
          console.log(error);
        }
      );
  }

  onSubmit(): void {
    const id = this.route.snapshot.params['id'];
    this.catService.updateCategory(id, this.cat)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/categories']);
        },
        error => {
          console.log(error);
        }
      );
  }

}
