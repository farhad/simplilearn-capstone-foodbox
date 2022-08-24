import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CategoryService} from "./services/category.service";
import {DishService} from "./services/dish.service";
import {HttpClientModule} from "@angular/common/http";
import {DishListComponent} from './components/dish-list/dish-list.component';
import {CategoryListComponent} from './components/category-list/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DishListComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CategoryService, DishService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
