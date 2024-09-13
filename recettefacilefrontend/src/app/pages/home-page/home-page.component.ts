import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CreateRecipeFormComponent } from '../create-recipe-form/create-recipe-form.component';
import {MatDialog,} from '@angular/material/dialog'; 
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { AuthServiceService } from '../../services/Auth/auth-service.service';
import { RecipeServiceService } from '../../services/Recipe/recipe-service.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatIconModule,
    RecipeCardComponent,
    MatButtonModule
    


  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  
  constructor(public dialog: MatDialog,  public authService:AuthServiceService, public recipeService:RecipeServiceService){  }

  
  recipes=[]

  handleOpenCreateRecipeForm(){
    this.dialog.open(CreateRecipeFormComponent)
  }

  ngOnInit(){
    this.authService.getUserProfile();
    this.recipeService.getRecipes().subscribe() 
    this.recipeService.recipeSubject.subscribe(
      (state)=>{
        console.log("state",state)
        this.recipes = state.recipes
      }
    )

  }
   

}

