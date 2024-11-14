import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaisonListComponent } from './maison-list/maison-list.component';
import { MaisonCreateComponent } from './maison-create/maison-create.component';
import { FormsModule } from '@angular/forms';
import { MaisonUpdateComponent } from './maison-update/maison-update.component';
import { MaisonDetailsComponent } from './maison-details/maison-details.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CouponListComponent } from './coupon-list/coupon-list.component';
import { CouponUpdateComponent } from './coupon-update/coupon-update.component';
import { CouponCreateComponent } from './coupon-create/coupon-create.component';
import { MaisonClientlistComponent } from './maisonscli/maison-clientlist/maison-clientlist.component';
import { DetailsclientComponent } from './maisonscli/detailsclient/detailsclient.component';
import { PropertiesComponent } from './maisonscli/properties/properties.component';
import { IndexComponent } from './index/index.component';
import { AboutusComponent } from './maisonscli/aboutus/aboutus.component';
import { EntrepriseComponent } from './maisonscli/entreprise/entreprise.component';
import { ContactComponent } from './maisonscli/contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    MaisonListComponent,
    MaisonCreateComponent,
    MaisonUpdateComponent,
    MaisonDetailsComponent,
    CategoryCreateComponent,
    CategoryListComponent,
    CategoryUpdateComponent,
    CategoryDetailsComponent,
    CouponListComponent,
    CouponUpdateComponent,
    CouponCreateComponent,
    MaisonClientlistComponent,
    DetailsclientComponent,
    PropertiesComponent,
    IndexComponent,
    AboutusComponent,
    EntrepriseComponent,
    ContactComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule ,
    
  ],
  providers: [],
  bootstrap: [AppComponent ,MaisonClientlistComponent]
})
export class AppModule { }
