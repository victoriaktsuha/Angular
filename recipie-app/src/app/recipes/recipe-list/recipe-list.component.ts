import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.supergoldenbakes.com/wordpress/wp-content/uploads/2019/10/Hungarian_Goulash_s.jpg'
    ),
    /* new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.supergoldenbakes.com/wordpress/wp-content/uploads/2019/10/Hungarian_Goulash_s.jpg'
    ), */
  ];

  constructor() {}
  ngOnInit(): void {}
}
