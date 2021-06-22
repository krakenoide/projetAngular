import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { serviceUser } from '../../Services/serviceUser';

@Component({
  selector: 'app-page-modif',
  templateUrl: './page-modif.component.html',
  styleUrls: ['../../style.css']
})

export class PageModifComponent implements OnInit {
  connectedUser: User;

  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private services:serviceUser, user:User) { 
    this.connectedUser=user;
  }

  ngOnInit(): void {
    this.myForm=this.formBuilder.group({
      nusername:["",[Validators.required,Validators.maxLength(50)]],
      oldpassword:["",[Validators.required]],
      npassword:["",[Validators.required]],
      npasswordbis:["",[Validators.required]]
         
    });
    
  }

  onSubmit(): void {

  }

  getErrors():string|void {

  }
}
