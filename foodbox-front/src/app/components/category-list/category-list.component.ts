import {Component, OnInit} from '@angular/core';
import {Category} from "../../common/category";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  public categories!: Category[]

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.listCategories();
  }

  listCategories() {
    this.categoryService.getCategories().subscribe(data => this.categories = data)
  }

}
