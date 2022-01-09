import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() onAddIngredient = new EventEmitter<Ingredient>();

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor() {
    this.nameInputRef = new ElementRef('null');
    this.amountInputRef = new ElementRef('null');
  }

  ngOnInit(): void {
  }

  addIngredient() :void {
    this.onAddIngredient.emit(
      new Ingredient(this.nameInputRef.nativeElement.value, 
      this.amountInputRef.nativeElement.value)
    );    
  }

}
