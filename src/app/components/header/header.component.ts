import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/modeles/User';
import { serviceUser } from '../../Services/serviceUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
  

  constructor(private services:serviceUser, ) { 

  }

  ngOnInit(): void {
    
  }

}
