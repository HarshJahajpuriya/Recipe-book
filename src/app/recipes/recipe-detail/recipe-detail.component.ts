import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe :Recipe = this.recipeService.getSelectedRecipe();

  constructor(private recipeService: RecipeService) { 
    this.recipe = new Recipe('','','');
  }

  ngOnInit(): void {
  }

}
