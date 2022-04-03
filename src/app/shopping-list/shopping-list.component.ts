import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

  
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  i : number;
  constructor(private shoppingListService: ShoppingListService) { }
  
  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredientList();
    this.shoppingListService.ingredientChanged
    .subscribe((ingredients: Ingredient[])=>{
      this.ingredients = ingredients;
    })
  }
  OnEditIngredient(i:number){
    this.shoppingListService.ingredientEdited.emit(i);
  }
  
}
