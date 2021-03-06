import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

  
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients: Ingredient[];
  i : number;
  igChangeSub: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }
  
  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredientList();
   this.igChangeSub = this.shoppingListService.ingredientChanged
    .subscribe((ingredients: Ingredient[])=>{
      this.ingredients = ingredients;
    })
  }
  onEditIngredient(i:number){
    this.shoppingListService.ingredientEdited.next(i);
  }
  ngOnDestroy(): void {
      this.igChangeSub.unsubscribe();
  }
  
}
