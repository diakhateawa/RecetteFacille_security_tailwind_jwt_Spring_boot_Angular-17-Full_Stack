import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { AuthServiceService } from '../../services/Auth/auth-service.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule

  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  isRegister=true;
  constructor(public authService:AuthServiceService){

  }
togglaPanel() {
  this.isRegister=!this.isRegister
}
handleLogin() {
  console.log("login", this.loginForm.value)
  this.authService.login(this.loginForm.value).subscribe({
    next:(response=>{
      localStorage.setItem("jwt",response.jwt);
      this.authService.getUserProfile().subscribe();
      console.log("login success",response)
    })
  })  
} 

handleRegister() {
  console.log("register", this.registerationForm.value)
   this.authService.register(this.registerationForm.value).subscribe({
    next:(response=>{
      localStorage.setItem("jwt",response.jwt);
      this.authService.getUserProfile().subscribe();
      console.log("signup in success",response)
    })
  })  
}


  registerationForm= new FormGroup({
  fullName:new FormControl("",[Validators.required]),
  email:new FormControl("",[Validators.required, Validators.email]),
  password:new FormControl("",[Validators.required, Validators.minLength(6),]),
 });

  loginForm= new FormGroup({
  email:new FormControl("",[Validators.required, Validators.email]),
  password:new FormControl("",[Validators.required]),
 });

}



