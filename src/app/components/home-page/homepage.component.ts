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
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private services:serviceUser) { 
  }

  ngOnInit(): void {   
    this.myForm = this.formBuilder.group({
      title: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(100)]],
      message: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(3000)]]
    });  
  }

  onSubmit(): void {
  }

  getTitleErrors(): string|void{
    if (this.myForm.controls.title.hasError('required')){
      return 'Ce champ est requis';
    }
    if (this.myForm.controls.title.hasError('minLength')){
      return "Le titre doit comporter au minimum 5 caractères";
    }
    if (this.myForm.controls.username.hasError('maxLength')){
      return "Le titre doit comporter au maximum 100 caractères";
    }
  }

  getMessageErrors(): string|void{
    if (this.myForm.controls.message.hasError('required')){
      return 'Ce champ est requis';
    }
    if (this.myForm.controls.message.hasError('minLength')){
      return "Le titre doit comporter au minimum 5 caractères";
    }
    if (this.myForm.controls.message.hasError('maxLength')){
      return "Le titre doit comporter au maximum 3000 caractères";
    }
  }
  
}
