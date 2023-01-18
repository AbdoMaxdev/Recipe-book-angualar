import { ViewChild } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @Output() addIngredientItem = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameElement : ElementRef;

  addIngredient(amount){
    const ingName = this.nameElement.nativeElement.value;
    const ingAmount = amount.value
    let ingredient = new Ingredient(ingName, ingAmount)
    this.addIngredientItem.emit(ingredient);
  }

}
