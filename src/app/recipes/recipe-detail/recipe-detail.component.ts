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
  id: number = -1;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) { 
    this.recipe = null as any;
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
        this.recipeService.setSelectedRecipe(this.recipe)
      }
    )
  }

  addIngredients(): void {
    this.recipeService.addIngredientsToShoppingList();
  }

}
