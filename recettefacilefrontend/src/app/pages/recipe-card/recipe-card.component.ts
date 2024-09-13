import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatDialog,} from '@angular/material/dialog'; 
import { UpdateRecipeFormComponent } from '../update-recipe-form/update-recipe-form.component';
import { MatButtonModule } from '@angular/material/button';
import { RecipeServiceService } from '../../services/Recipe/recipe-service.service';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [MatIconModule,
    MatCardModule,
    MatButtonModule

  ],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {

  @Input() recipe:any
  @Input() toggle:any 
  
  constructor(public dialog: MatDialog, private recipeService: RecipeServiceService){
  }
  handleOpenEditRecipeForm() {
    this.dialog.open(UpdateRecipeFormComponent,
    {data: this.recipe})}
    

    ngOnInit(){
      console.log("toggle", this.toggle)

    }
 /* handleOpenUpdateRecipeForm() {
  this.dialog.open(UpdateRecipeFormComponent,
    {data: this.recipe})} */
handleDeletedRecipe() {
  this.recipeService.deletedRecipes(this.recipe.id).subscribe()
} 

    

}


