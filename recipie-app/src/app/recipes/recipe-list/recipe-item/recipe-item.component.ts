import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  @Output() recipeSelected = new EventEmitter<void>();
  // <void> means that this event won't pass any information

  onSelected() {
    this.recipeSelected.emit();
    // we don't need to pass any arguments because is the 'recipe-list' that will be actually hearing this event emission
  }
}
