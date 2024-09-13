import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/Auth/auth-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule,
    MatIconModule,
    MatButtonModule,


  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 handleLogOut(){
  this.authService.logout()

}
  user:any=null;

  constructor(public authService: AuthServiceService, private router:Router){}


  ngOnInit(){
    this.authService.authSubject.subscribe(
      (auth)=>{
        console.log("auth state", auth)
        this.user=auth.user
      }
    ) 
  } 

}