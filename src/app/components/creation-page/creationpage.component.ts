import { Component, OnInit} from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { serviceUser } from 'src/app/Services/serviceUser';

@Component({
    selector: 'app-creation-page',
    templateUrl: './creationpage.component.html'
})

export class CreationPageComponent implements OnInit {
    myForm!: FormGroup;

    constructor(private formBuilder: FormBuilder,private servicesUser:serviceUser,private snackBar:MatSnackBar) { 

    }

    ngOnInit(): void {
        this.myForm = this.formBuilder.group({
        username: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
        password: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
        passwordConfirm: ['',[Validators.required]],
    	rememberme: [false]
		});
	}

	isUsernameAlreadyInDb():void{
		//TODO : Dynamicly do this using Obsvervables and Validators
		//console.log(this.servicesUser.isUsernameAlreadyInDB(this.myForm.value.username));
	}

	onSubmit(): void {
		
		if(this.servicesUser.isUsernameAlreadyInDB(this.myForm.value.username)){
			this.snackBar.open("Cet utilisateur existe déjà !","Ok",{duration: 2000});
		} else {

			if(this.myForm.value.password!==this.myForm.value.passwordConfirm) {
				this.snackBar.open("Les mots de passe ne correspondent pas !","Ok",{duration: 2000});
			} else {
				this.servicesUser.createUser(this.myForm.value.username,this.myForm.value.password,this.myForm.value.passwordConfirm,this.myForm.value.rememberme);
			}
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

