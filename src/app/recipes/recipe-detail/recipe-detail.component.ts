import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

  @Input() detail : Recipe;

  constructor(private recipeservice : RecipeService){}

  addToShoppingList () {
      this.recipeservice.addToShopping(this.detail.ingredients);
  }

}
