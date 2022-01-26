import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [ RecipeService ]
})
export class RecipesComponent implements OnInit {

  selectedRecipe :Recipe;

  constructor(private recipeService: RecipeService) {
    this.selectedRecipe = null as any;
  }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.recipeService.setSelectedRecipe(recipe)
        this.selectedRecipe = recipe;
      }
    )
  }
  
  

}
 