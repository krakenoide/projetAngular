import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/modeles/User';
import { serviceUser } from '../../Services/serviceUser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
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
