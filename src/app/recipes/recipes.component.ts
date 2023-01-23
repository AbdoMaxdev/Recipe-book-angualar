import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  
  recipeDetail : Recipe;

  constructor(private recipeservice : RecipeService) {}

  showRecipeDetail(recipeData){
    this.recipeDetail = recipeData;
  }

  ngOnInit(): void {
    this.recipeservice.selectedRecipe.subscribe((recipe) =>{
      this.recipeDetail = recipe
    })
  }
}
