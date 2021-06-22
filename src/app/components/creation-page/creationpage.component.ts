import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { serviceUser } from 'src/app/Services/serviceUser';

@Component({
  selector: 'app-creation-page',
  templateUrl: './creationpage.component.html'
})

export class CreationPageComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private services:serviceUser) { 
  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      username: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
      password: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
      passwordConfirm: ['',[Validators.required]]
    });
    
  }

  onSubmit(): void {
    console.log(this.myForm.controls.username);
    if(this.myForm.value.password!==this.myForm.value.passwordConfirm) {
        console.log("les mdp de correspondent pas !");
    } else {
        this.services.createUser(this.myForm.value.username,this.myForm.value.password,this.myForm.value.passwordConfirm);
    }
  }

  getUsernameErrors(): string|void{
    if (this.myForm.controls.username.hasError('required')){
      return 'Ce champ est requis';
    }
    if (this.myForm.controls.username.hasError('minLength')){
      return "Le nom d'utilisateur doit comporter au minimum 3 caractères";
    }
    if (this.myForm.controls.username.hasError('maxLength')){
      return "Le nom d'utilisateur doit comporter au maximum 50 caractères";
    }
  }
  
  getPasswordErrors(): string|void{
    if (this.myForm.controls.password.hasError('required')){
      return 'Ce champ est requis';
    }
    if (this.myForm.controls.password.hasError('minLength')){
      return "Le mot de passe doit comporter au minimum 3 caractères";
    }
    if (this.myForm.controls.password.hasError('maxLength')){
      return "Le mot de passe doit comporter au maximum 50 caractères";
    }
  }
}
