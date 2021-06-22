import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,NgForm,Validators} from '@angular/forms'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  myForm!: FormGroup;
  message = "bonjour";
  isAuth = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.myForm = this.formBuilder.group({
      username: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
      password: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]]
    });
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

  onSubmit(): void {
      console.log('onSubmit');
      this.isAuth =true;
      console.log(this.myForm.value);
  }

}
