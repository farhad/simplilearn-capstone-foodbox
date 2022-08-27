import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CategoryService} from "./services/category.service";
import {DishService} from "./services/dish.service";
import {HttpClientModule} from "@angular/common/http";
import {DishListComponent} from './components/dish-list/dish-list.component';
import {CategoryListComponent} from './components/category-list/category-list.component';
import {RouterModule, Routes} from "@angular/router";
import {DishDetailComponent} from './components/dish-detail/dish-detail.component';
import {CartStatusComponent} from './components/cart-status/cart-status.component';

const routes: Routes = [
  {path: 'category/:id', component: DishListComponent},
  {path: 'dish/:id', component: DishDetailComponent},
  {path: 'category', component: DishListComponent},
  {path: 'dish', component: DishListComponent},
  {path: '', redirectTo: '/dish', pathMatch: "full"},
  {path: '**', redirectTo: '/dish', pathMatch: "full"},
]

@NgModule({
  declarations: [
    AppComponent,
    DishListComponent,
    CategoryListComponent,
    DishDetailComponent,
    CartStatusComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [CategoryService, DishService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
