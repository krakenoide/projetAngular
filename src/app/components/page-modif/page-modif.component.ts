import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { serviceUser } from '../../Services/serviceUser';
import { User } from 'src/app/modeles/User';

@Component({
  selector: 'app-page-modif',
  templateUrl: './page-modif.component.html'
})

export class PageModifComponent implements OnInit {
  user!: User;
  userSubscription!: Subscription;
  formModif!: FormGroup;

  constructor(private formBuilder: FormBuilder, private services:serviceUser) { 
    this.userSubscription = this.services.userSubject.subscribe((connectedUser:User) => {this.user=connectedUser;
    })
    this.services.emitConnectedUser();
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
      this.services.modifUser(this.formModif.value.nusername,this.formModif.value.oldpassword,this.formModif.value.npassword,this.formModif.value.npasswordbis);
  }

  getErrors():string|void {

  }
}
