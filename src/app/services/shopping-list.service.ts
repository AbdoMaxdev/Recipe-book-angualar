import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  
  ingredients : Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10)];

  IngredientChanged = new Subject<Ingredient>();
  selectedIngredient = new Subject<number>();
  
  constructor() { }

  getIngredients() {
    this.ingredients.slice();
  }

  getIngredient(id : number) {
    return this.ingredients[id];
  }

  editIngredient(index : number, ingredient : Ingredient) {
    this.ingredients[index] = ingredient;
  }

  deleteIngredient(index : number) {
    this.ingredients.splice(index, 1);
  }
  
  addIngredienTolist(ingredient){
    this.ingredients.push(ingredient);
    
  }

  addIngredients(ingredient : Ingredient[]){
    this.ingredients.push(...ingredient);
  }
}
