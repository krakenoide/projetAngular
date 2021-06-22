import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-creation-page',
  templateUrl: './creationpage.component.html',
  styleUrls: ['../../../styles.css']
})

export class CreationPageComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
  }

  ngOnInit(): void {
    this.myForm=this.formBuilder.group({
      nusername:["",[Validators.required,Validators.maxLength(5)]]
    });
    
  }

  onSubmit(): void {
    console.log(this.myForm.controls.username);
  }

  getErrors():string|void {
    if (this.myForm.controls.username.hasError("required")){
        return "ce champ est requis";
    }
    if (this.myForm.controls.username.hasError("maxLength")) {
        return "vous avez depassez le nombre de caractères maximum";
    }
  }
}
