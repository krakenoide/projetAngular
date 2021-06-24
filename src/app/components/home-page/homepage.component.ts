import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm, Validators, FormBuilder, FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { User } from 'src/app/modeles/User';
import { serviceUser } from '../../Services/serviceUser';

@Component({
  selector: 'app-home-page',
  templateUrl: './homepage.component.html'
})

export class HomePageComponent implements OnInit {
  connectedUser!: User;
  myForm!: FormGroup;
  myControl = new FormControl();
  options: string[] = ['Topic1', 'Topic2', 'Topic3'];
  filteredOptions!: Observable<string[]>;
  booleanlist:boolean[]=[];

  constructor(private formBuilder: FormBuilder,private services:serviceUser) { 
  }

  ngOnInit(): void {   
    this.myForm = this.formBuilder.group({
      title: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(100)]],
      message: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(3000)]]
    });  

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.mousecheck();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);    
  }
  

  onSubmit(): void {
  }

  getTitleErrors(): string|void{
    if (this.myForm.controls.title.hasError('required')){
      return 'Ce champ est requis';
    }
    if (this.myForm.controls.title.hasError('minLength')){
      return "Le titre doit comporter au minimum 5 caractères";
    }
    if (this.myForm.controls.username.hasError('maxLength')){
      return "Le titre doit comporter au maximum 100 caractères";
    }
  }

  getMessageErrors(): string|void{
    if (this.myForm.controls.message.hasError('required')){
      return 'Ce champ est requis';
    }
    if (this.myForm.controls.message.hasError('minLength')){
      return "Le titre doit comporter au minimum 5 caractères";
    }
    if (this.myForm.controls.message.hasError('maxLength')){
      return "Le titre doit comporter au maximum 3000 caractères";
    }
  }
  
  mouseEnterlist(i:number){
    this.booleanlist[i]=true; 
  }

  mouseLeavelist(i:number){
    this.booleanlist[i]=false; 
  }
  
   mousecheck(){
   for (let i=0;i<this.options.length;i++){
      this.booleanlist.push(false);
   }
   }

   topicSelect(id:number) {
      
   }
  
}
