import { 
  ViewChild, 
  Component, 
  Output,
  ElementRef } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput') nameElement : ElementRef;

  constructor(private shoppinglistservice: ShoppingListService) {}

  addIngredient(amount){
    const ingName = this.nameElement.nativeElement.value;
    const ingAmount = amount.value
    let ingredient = new Ingredient(ingName, ingAmount)
    this.shoppinglistservice.addIngredienTolist(ingredient);
  }

}
