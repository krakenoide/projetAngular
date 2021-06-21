import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { serviceConnected } from '../serviceConnected';

@Component({
  selector: 'app-page-modif',
  templateUrl: './page-modif.component.html',
  styleUrls: ['./page-modif.component.css']
})

export class PageModifComponent implements OnInit {
  connectedUser: string ="";

  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private connected:serviceConnected) { }

  ngOnInit(): void {
    this.myForm=this.formBuilder.group({
      nusername:["",[Validators.required,Validators.maxLength(50)]],
      oldpassword:["",[Validators.required]],
      npassword:["",[Validators.required]],
      npasswordbis:["",[Validators.required]]
         
    })
    
  }

  onSubmit(): void {

  }

}
