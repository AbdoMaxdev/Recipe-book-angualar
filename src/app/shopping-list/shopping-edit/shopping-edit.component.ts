import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('f') slForm : NgForm; 
  subscription : Subscription;
  editMode : boolean = false;
  IdEditItem : number;
  itemEdit : Ingredient;

  constructor(private shoppinglistservice: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.shoppinglistservice.selectedIngredient
    .subscribe((index : number)=>{
      this.IdEditItem = index;
      this.editMode = true;
      this.itemEdit = this.shoppinglistservice.getIngredient(index)
      this.slForm.setValue({
        name : this.itemEdit.name,
        amount : this.itemEdit.amount
      })
    })
  }

  OnClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  deleteSlItem() {
    this.shoppinglistservice.deleteIngredient(this.IdEditItem)
    this.OnClear()
  }

  addIngredient(form ){
    let ingredient = new Ingredient(form.value.name, form.value.amount)
    if(this.editMode){
      this.shoppinglistservice.editIngredient(this.IdEditItem,ingredient)
    }else{
      this.shoppinglistservice.addIngredienTolist(ingredient);
    }
    this.editMode = false
    form.reset();
  }

}
