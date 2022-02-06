import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  index: number = -1;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) { 
    this.recipe = null as any;
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.index = +params['index'];
        this.recipe = this.recipeService.getRecipe(this.index);
        this.recipeService.setSelectedRecipe(this.recipe)
      }
    )
  }

  addIngredients(): void {
    this.recipeService.addIngredientsToShoppingList();
  }

}
