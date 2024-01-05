import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { FormCategoryComponent } from './components/form-category/form-category.component';
import { NewCategoryComponent } from './components/new-category/new-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryListComponent } from './components/categories/categories.component';
import { NewCategoryPagesComponent } from './pages/new-category-pages/new-category-pages.component';


@NgModule({
  declarations: [CategoryListComponent, FormCategoryComponent, 
    NewCategoryComponent, CategoriesPageComponent,
  NewCategoryPagesComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule, ReactiveFormsModule, SharedModule
  ]
})
export class CategoriesModule { }
