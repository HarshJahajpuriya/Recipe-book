import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe :Recipe|any;

  constructor() {
    this.selectedRecipe = null;
  }

  ngOnInit(): void {
  }

  updateSelectedRecipe(recipe :Recipe) :void {
    this.selectedRecipe = recipe
  }

}