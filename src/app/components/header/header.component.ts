import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/modeles/User';
import { serviceUser } from '../../Services/serviceUser';
import { Subscription } from 'rxjs';
import {MatButtonModule} from '@angular/material/button'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
  user!: User;
  userSubscription!: Subscription;


  constructor( private services:serviceUser,private router:Router) { 
    this.userSubscription = this.services.userSubject.subscribe((connectedUser:User) => {this.user=connectedUser;
    if (localStorage.getItem("storedUser")) {
      services.setConnectedUser(JSON.parse(localStorage.getItem("storedUser")!));
    }
    })
    
    this.services.emitConnectedUser();
  }

  ngOnInit(): void {
    console.log(this.user);
  }

  clickAccueil():void {
    this.router.navigate(['']);
  }

  clickModifCompte():void{
    this.router.navigate(['modif']);
  }

  clickCreationCompte():void {
    this.router.navigate(['creationpage']);
  }
  clickLogin():void {
    this.router.navigate(['login']);
  }
  clickLogout():void{
    this.services.setConnectedUser(new User(0,"","",0));
    this.router.navigate(['']);
  }
}
