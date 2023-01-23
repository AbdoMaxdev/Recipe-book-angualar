import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: Recipe[] = [
    new Recipe(
      'Turkey meatballs',
      'Whip up a classic meatball',
      'http://is.am/5as3',
      [
        new Ingredient('Meat',1),
        new Ingredient('Tomate',2)
      ]),
    new Recipe(
      'Chicken burgers',
      'What else you want to say?',
      'http://is.am/5as4',
      [
        new Ingredient('Chicken',1),
        new Ingredient('Salade',3)
      ])
  ];

  selectedRecipe = new EventEmitter<Recipe>();
  
  constructor(private shoppinglistservice : ShoppingListService) {}

  getRecipes(){
    return this.recipes.slice();
  }

  addToShopping(ingredient :  Ingredient[]){
    this.shoppinglistservice.addIngredients(ingredient)
  }
  
}
