import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService {

  private selectedRecipe: Recipe = null as any;

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe', 
      "This is just a test", 
      "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2KL6JYQYH4I6REYMIWBYVUGXPI.jpg&w=916",
      [
        new Ingredient('Bread', 2),
        new Ingredient('Meat', 1)
      ]
    ),
    new Recipe(
      'New Test Recipe', 
      "This is second test", 
      "data:image/jpeg;base64,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",
      [
        new Ingredient('Bun', 2),
        new Ingredient('Potato', 5)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return Object.assign({}, this.recipes[id]);
  }

  setSelectedRecipe(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

  getSelectedRecipe(): Recipe {
    return this.selectedRecipe;
  }

  addIngredientsToShoppingList(): void {
    this.shoppingListService.addIngredients(this.selectedRecipe.ingredients);
  }

}