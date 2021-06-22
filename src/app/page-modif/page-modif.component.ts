import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { serviceUser } from '../Services/serviceUser';

@Component({
  selector: 'app-page-modif',
  templateUrl: './page-modif.component.html',
  styleUrls: ['../../style.css']
})

export class PageModifComponent implements OnInit {
  user!: User;
  userSubscription!: Subscription

  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private services:serviceUser) { 
    this.userSubscription = this.services.userSubject.subscribe((connectedUser:User) => {this.user=connectedUser;
    })
    this.services.emitConnectedUser();
  }

  ngOnInit(): void {
    this.myForm=this.formBuilder.group({
      nusername:["",[Validators.required,Validators.maxLength(50)]],
      oldpassword:["",[Validators.required]],
      npassword:["",[Validators.required]],
      npasswordbis:["",[Validators.required]]
         
    })
  }

  onSubmit(): void {
      this.services.modifUser(this.myForm.value.nusername,this.myForm.value.oldpassword,this.myForm.value.npassword,this.myForm.value.npasswordbis);
  }

  getErrors():string|void {

  }
}
