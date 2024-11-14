import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit{

  id!: number
  cat!: Category
  constructor(private route: ActivatedRoute, private catService: CategoryService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.cat = new Category();
    this.catService.getCategoryInfo(this.id).subscribe( data => {
      this.cat = data;
    });
  }

}
