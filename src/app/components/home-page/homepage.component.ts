import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/modeles/User';
import { serviceUser } from '../../Services/serviceUser';

@Component({
  selector: 'app-home-page',
  templateUrl: './homepage.component.html'
})

export class HomePageComponent implements OnInit {
  connectedUser!: User;

  constructor(private services:serviceUser) { 
  }

  ngOnInit(): void {     
  }
  
}
