import {Component, OnInit} from '@angular/core';
import {Category} from "./category";
import {CategoryService} from "./category.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'foodbox-front';
  public categories!: Category[];

  constructor(private categoryService: CategoryService) {
  }

  public getCategories(): void {
    this.categoryService.getCategories().subscribe(
      (response: Category[]) => {
        this.categories = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
