import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Goulash Recipe',
      'This is simply goulash recipe',
      'https://www.supergoldenbakes.com/wordpress/wp-content/uploads/2019/10/Hungarian_Goulash_s.jpg'
    ),
    new Recipe(
      'Pancake Recipe',
      'This is simply pancake recipe',
      'https://lilluna.com/wp-content/uploads/2022/09/easy-pancakes3-resize-10.jpg'
    ),
  ];
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
  constructor() {}
  ngOnInit(): void {}
}
