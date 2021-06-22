import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { serviceUser } from '../Services/serviceUser';
import { User } from  'src/app/modeles/User';

@Component({
  selector: 'app-page-modif',
  templateUrl: './page-modif.component.html',
  styleUrls: ['./page-modif.component.css']
})

export class PageModifComponent implements OnInit {
  connectedUser!: User;
  userSubscription!: Subscription

  formModif!: FormGroup;

  constructor(private formBuilder: FormBuilder, private services:serviceUser) { 
  }

  ngOnInit(): void {
    this.formModif=this.formBuilder.group({
      nusername:["",[Validators.required,Validators.maxLength(50)]],
      oldpassword:["",[Validators.required]],
      npassword:["",[Validators.required]],
      npasswordbis:["",[Validators.required]]
    })
  }

  onSubmit(): void {

  }

  getErrors():string|void {

  }
}
