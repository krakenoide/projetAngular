import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { serviceUser } from '../../Services/serviceUser';
import { User } from 'src/app/modeles/User';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-page-modif',
  templateUrl: './page-modif.component.html'
})

export class PageModifComponent implements OnInit {
  user!: User;
  userSubscription!: Subscription

  formModif!: FormGroup;

  constructor(private formBuilder: FormBuilder, private servicesUser:serviceUser) { 
    this.userSubscription = this.servicesUser.userSubject.subscribe((connectedUser:User) => {this.user=connectedUser;
    })
    this.servicesUser.emitConnectedUser();
  }
  ngOnInit(): void {
    this.formModif=this.formBuilder.group({
      nusername:["",[Validators.maxLength(50)]],
      oldpassword:["",[Validators.required]],
      npassword:["",],
      npasswordbis:["",]
    })
  }

  onSubmit(): void {
      this.servicesUser.modifUser(this.formModif.value.nusername,this.formModif.value.oldpassword,this.formModif.value.npassword,this.formModif.value.npasswordbis);
    }

  getErrors():string|void {

  }
}
