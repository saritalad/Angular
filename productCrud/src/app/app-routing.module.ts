import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';
import { CatEditComponent } from './cat-edit/cat-edit.component';
import { CatlistComponent } from './catlist/catlist.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [







  {path:"",redirectTo:"list",pathMatch:"full"},
  {path:"list",component:CatlistComponent},
  {path:"details/:id",component:CatDetailsComponent},
  {path:"edit/:id",component:CatEditComponent},





  
  {path:"add",component:AddProductComponent},
 
  {path:"**",component:NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
