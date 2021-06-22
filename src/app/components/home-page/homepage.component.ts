import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/modeles/User';
import { Subscription } from 'rxjs';
import { serviceUser } from '../../Services/serviceUser';

@Component({
  selector: 'app-home-page',
  templateUrl: './homepage.component.html'
})

export class HomePageComponent implements OnInit {
  user!: User;
  userSubscription!: Subscription;


  constructor( private services:serviceUser) { 
    this.userSubscription = this.services.userSubject.subscribe((connectedUser:User) => {this.user=connectedUser;
    })
    this.services.emitConnectedUser();
  }

  ngOnInit(): void {     
  }
  
}
