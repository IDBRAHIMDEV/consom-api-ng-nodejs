import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductsComponent } from './components/md-product/list-products/list-products.component';
import { AddProductComponent } from './components/md-product/add-product/add-product.component';
import { EditProductComponent } from './components/md-product/edit-product/edit-product.component';
import { EditCategoryComponent } from './components/md-category/edit-category/edit-category.component';
import { AddCategoryComponent } from './components/md-category/add-category/add-category.component';
import { ListCategoriesComponent } from './components/md-category/list-categories/list-categories.component';
import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    AddProductComponent,
    EditProductComponent,
    EditCategoryComponent,
    AddCategoryComponent,
    ListCategoriesComponent,
    PageNotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
