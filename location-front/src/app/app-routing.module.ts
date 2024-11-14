import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaisonListComponent } from './maison-list/maison-list.component';
import { MaisonCreateComponent } from './maison-create/maison-create.component';
import { MaisonUpdateComponent } from './maison-update/maison-update.component';
import { MaisonDetailsComponent } from './maison-details/maison-details.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CouponListComponent } from './coupon-list/coupon-list.component';
import { CouponCreateComponent } from './coupon-create/coupon-create.component';
import { CouponUpdateComponent } from './coupon-update/coupon-update.component';
import { MaisonClientlistComponent } from './maisonscli/maison-clientlist/maison-clientlist.component';
import { DetailsclientComponent } from './maisonscli/detailsclient/detailsclient.component';
import { PropertiesComponent } from './maisonscli/properties/properties.component';
import { IndexComponent } from './index/index.component';
import { AboutusComponent } from './maisonscli/aboutus/aboutus.component';
import { EntrepriseComponent } from './maisonscli/entreprise/entreprise.component';
import { ContactComponent } from './maisonscli/contact/contact.component';

const routes: Routes = [
  {path: 'maisons', component: MaisonListComponent},
  {path: 'maison-create', component: MaisonCreateComponent},
  {path: '', redirectTo: 'maisons', pathMatch: 'full'},
  {path: 'update-maison/:id', component: MaisonUpdateComponent},
  {path: 'maison-details/:id', component: MaisonDetailsComponent},
  {path: 'categories', component: CategoryListComponent},
  {path: 'category-create', component: CategoryCreateComponent},
  {path: 'update-category/:id', component: CategoryUpdateComponent},
  {path: 'category-details/:id', component: CategoryDetailsComponent},
  {path: 'coupons', component: CouponListComponent},
  {path: 'coupon-create', component: CouponCreateComponent},
  {path: 'update-coupon/:id', component: CouponUpdateComponent},
  {path: 'index', component: MaisonClientlistComponent},
  {path: 'details-maison/:id', component: DetailsclientComponent},
  {path: 'properties', component: PropertiesComponent},
  {path: 'indexAdmin', component: IndexComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'entreprise', component: EntrepriseComponent},
  {path: 'contact', component: ContactComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
