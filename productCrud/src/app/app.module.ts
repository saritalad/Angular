import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CatlistComponent } from './catlist/catlist.component';
import { CatAddComponent } from './cat-add/cat-add.component';
import { CatEditComponent } from './cat-edit/cat-edit.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductDetailsComponent,
    EditProductComponent,
    AddProductComponent,
    NotFoundComponent,
    CatlistComponent,
    CatAddComponent,
    CatEditComponent,
    CatDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
