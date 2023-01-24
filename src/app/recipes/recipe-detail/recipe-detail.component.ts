import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  detail : Recipe;

  constructor(private recipeservice : RecipeService,
    private route : ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((params : Params) =>{
      const id = +params['id'];
      this.detail = this.recipeservice.getRecipe(id);
    })
  }

  addToShoppingList () {
      this.recipeservice.addToShopping(this.detail.ingredients);
  }

}
