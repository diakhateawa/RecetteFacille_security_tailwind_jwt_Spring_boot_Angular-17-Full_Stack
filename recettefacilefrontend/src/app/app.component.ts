import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AuthServiceService } from './services/Auth/auth-service.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AuthComponent } from './pages/auth/auth.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatRadioModule,
    NavbarComponent,
    FooterComponent,
    CommonModule,
    RouterOutlet,
    HomePageComponent,
    AuthComponent,
    
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recettefacilefrontend';

  
  user:any=null;

   constructor(public authService: AuthServiceService){}
   ngOnInit(){
    console.log("ngOnInit")
    this.authService.getUserProfile().subscribe({
      next:data=>console.log("req user",data),
      error:error=>console.log("error", error)
      
    });
    this.authService.authSubject.subscribe(
      (auth)=>{
        console.log("auth state", auth)
        this.user=auth.user
      }
    )
   }
 
}


