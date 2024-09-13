import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RecipeServiceService } from '../../services/Recipe/recipe-service.service';

@Component({
  selector: 'app-update-recipe-form',
  standalone: true,
  imports: [MatFormFieldModule,
    FormsModule,
    MatRadioModule
  ],
  templateUrl: './update-recipe-form.component.html',
  styleUrl: './update-recipe-form.component.css'
})
export class UpdateRecipeFormComponent {
 constructor(@Inject(MAT_DIALOG_DATA) public recipe: any, private recipeService: RecipeServiceService){
 }
onSubmit() {
  this.recipeService.deletedRecipes(this.recipe.id);
 this.recipeService.updatedRecipes(this.recipeItem).subscribe({
    next:data=>console.log("update", data),
    error:error=>console.log("error", error)

  })
  console.log("values -------------------", this.recipeItem);  
}
  recipeItem:any={
    title:"",
    description:"",
    foodType:"",
    image:""
  }

  ngOnInit(){
  this.recipeItem=this.recipe


  }


/*  constructor(@Inject(MAT_DIALOG_DATA) public recipe: any, private recipeService: RecipeServiceService){

  }
   
  onSubmit() {
    this.recipeService.deletedRecipes(this.recipe.id);
   this.recipeService.updatedRecipes(this.recipeItem).subscribe({
      next:data=>console.log("update", data),
      error:error=>console.log("error", error)

    })
    console.log("values -------------------", this.recipeItem); 
  }
    recipeItem:any={
      title:"",
      description:"",
      foodType:"",
      image:""
    }

    ngOnInit(){
    this.recipeItem=this.recipe
 

    }  */
  
}



