import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']

})

export class LoginPageComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
  }


  ngOnInit(): void {
    console.log("ngOnInit");
    this.loginForm = this.formBuilder.group({
      username: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
      password: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]]
    });
  } 


  onSubmit(): void {
    console.log('onSubmit');
    console.log(this.loginForm.value.username);
    console.log(this.loginForm.value.password);
  }

   getUsernameErrors(): string|void{
    if (this.loginForm.controls.username.hasError('required')){
      return 'Ce champ est requis';
    }
    if (this.loginForm.controls.username.hasError('minLength')){
      return "Le nom d'utilisateur doit comporter au minimum 3 caractères";
    }
    if (this.loginForm.controls.username.hasError('maxLength')){
      return "Le nom d'utilisateur doit comporter au maximum 50 caractères";
    }
  }
  
  getPasswordErrors(): string|void{
    if (this.loginForm.controls.password.hasError('required')){
      return 'Ce champ est requis';
    }
    if (this.loginForm.controls.password.hasError('minLength')){
      return "Le mot de passe doit comporter au minimum 3 caractères";
    }
    if (this.loginForm.controls.password.hasError('maxLength')){
      return "Le mot de passe doit comporter au maximum 50 caractères";
    }
  }


  
}


  

