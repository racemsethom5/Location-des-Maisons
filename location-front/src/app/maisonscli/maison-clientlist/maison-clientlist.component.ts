import { Component, OnInit ,AfterViewInit , ViewChild, ElementRef , HostListener} from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/category';
import { CategoryService } from 'src/app/category.service';
import { Maison } from 'src/app/maison';
import { MaisonService } from 'src/app/maison.service';
import Swiper from 'swiper';




@Component({
  selector: 'app-maison-clientlist',
  templateUrl: './maison-clientlist.component.html',
  styleUrls: ['./maison-clientlist.component.css']
})


export class MaisonClientlistComponent implements OnInit {
  isNavbarCollapsed = true;




  maisons!: Maison[];
  categories!: Category[];
 

  nom: string = '';
  adress: string = '';
  priceRange: number | null = null;
  categoryId: number | null = null;

  constructor(private maisonService : MaisonService ,private router: Router ,  private categoryService: CategoryService,private navbarElementRef: ElementRef) { 
    
  }

  ngOnInit(): void {
    this.getMaisons() ;
    this.getCategories() ;
    this.toggleNavbar();
   
    
  }
  

  @HostListener('window:scroll')
  onWindowScroll() {
    this.toggleNavbar();
  }

  toggleNavbar() {
    const navbarElement = document.querySelector('.navbar');
    if (navbarElement) {
      if (window.scrollY > 100) {
        navbarElement.classList.add('navbar-reduce');
        navbarElement.classList.remove('navbar-trans');
      } else {
        navbarElement.classList.remove('navbar-reduce');
        navbarElement.classList.add('navbar-trans');
      }
    }
  }

 

   



  
  private getCategories() {
    this.categoryService.getCategoriesList().subscribe(data => {
      this.categories = data;
    });
  }

  getMaisons(): void {
    if (this.nom || this.adress || this.priceRange !== null || this.categoryId !== null) {
      // Search with the provided search criteria
      this.maisonService.searchMaisons(this.nom, this.adress, this.priceRange, this.categoryId)
        .subscribe(data => {
          this.maisons = data;
          console.log(data);
        });
    } else {
      // Retrieve all maisons if no search criteria is provided
      this.maisonService.getMaisonsList().subscribe(data => {
        this.maisons = data;
        console.log(data);
      });
    }
  }

  searchMaisons(): void {
    this.getMaisons();
  }


  maisonDetails(id: number){
    this.router.navigate(['details-maison', id]);
  }

 

}


