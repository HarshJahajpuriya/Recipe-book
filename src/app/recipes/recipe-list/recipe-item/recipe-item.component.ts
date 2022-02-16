import { Component, Input, OnInit} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe :Recipe; 
  @Input() id: number;

  constructor() {
    this.recipe = null as any;
    this.id = -1;
  }

  ngOnInit(): void {
  }

}
