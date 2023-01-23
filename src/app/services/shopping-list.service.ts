import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  
  ingredients : Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10)];
  
  constructor() { }

  addIngredienTolist(ingredient){
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredient : Ingredient[]){
    this.ingredients.push(...ingredient);
  }
}
