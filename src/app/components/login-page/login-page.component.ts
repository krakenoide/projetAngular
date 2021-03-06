import { Component, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { serviceUser } from '../../Services/serviceUser';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html'
})

export class LoginPageComponent implements OnInit {
	loginForm!: FormGroup;

	constructor(private formBuilder: FormBuilder,private servicesUser:serviceUser) { 
	
	}

	ngOnInit(): void {
		this.loginForm = this.formBuilder.group({
			username: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
			password: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
			rememberme: [false]
		});
	} 

	onSubmit(): void {
		this.servicesUser.login(this.loginForm.value.username,this.loginForm.value.password,
			this.loginForm.value.rememberme);
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
		if (this.loginForm.controls.username.hasError('notInDB')){
			return "Le nom d'utilisateur est déjà utilisé par un autre utilisateur";
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

