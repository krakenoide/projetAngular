import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/modeles/User';
import { serviceUser } from '../../Services/serviceUser';
import { serviceTopic } from '../../Services/serviceTopic';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Topic } from 'src/app/modeles/Topic';

@Component({
 	selector: 'app-header',
 	 templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
  	user!: User;
  	userSubscription!: Subscription;
  
  	constructor( private servicesUser:serviceUser,private router:Router,private servicesTopic:serviceTopic) { 
    	this.userSubscription = this.servicesUser.userSubject.subscribe((connectedUser:User) => {
        	this.user=connectedUser;
    	});
    	this.servicesUser.emitConnectedUser();
  	}

	ngOnInit(): void {
		console.log(this.user);
		if (localStorage.getItem("storedUser")) {
			this.servicesUser.setConnectedUser(JSON.parse(localStorage.getItem("storedUser")!));
		}
	}

	clickAccueil():void {
		this.router.navigate(['']);
	}

	clickModifCompte():void{
		this.router.navigate(['modif']);
	}

	clickCreationCompte():void {
		this.router.navigate(['creationpage']);
	}
	clickLogin():void {
		this.router.navigate(['login']);
	}
	clickLogout():void{
		if (localStorage.getItem("storedUser")) {
			localStorage.removeItem("storedUser");    
		}
		this.servicesUser.setConnectedUser(new User(0,"","",0));
		this.router.navigate(['']);
	}
}
