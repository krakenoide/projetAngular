import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm, Validators, FormBuilder, FormControl } from '@angular/forms';
import {Observable,Subscription} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { User } from 'src/app/modeles/User';
import { Topic } from 'src/app/modeles/Topic';
import { serviceUser } from '../../Services/serviceUser';
import { serviceTopic } from '../../Services/serviceTopic';
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Message } from 'src/app/modeles/Message';

@Component({
  selector: 'app-home-page',
  templateUrl: './homepage.component.html'
})

export class HomePageComponent implements OnInit {
  connectedUser!: User;
  myForm!: FormGroup;
  myControl = new FormControl();
  topicList: Topic[]=[];
  filteredTopics!: Observable<Topic[]>;
  booleanlistisover:boolean[]=[];
  booleanlistisclicked:boolean[]=[];
  topicSubscription!: Subscription;
  userSubscription!: Subscription;
  activeTopic!: Topic;

  constructor(private formBuilder: FormBuilder,private servicesUser:serviceUser,private servicesTopic:serviceTopic,private router:Router,private snackBar:MatSnackBar) { 
    this.userSubscription = this.servicesUser.userSubject.subscribe((connectedUser:User) => {this.connectedUser=connectedUser;
    })
    this.servicesUser.emitConnectedUser();
    this.topicSubscription = this.servicesTopic.topicSubject.subscribe((currenTopic:Topic) => {this.activeTopic=currenTopic;
    })
    this.servicesTopic.emitActiveTopic();
    
    this.topicSubscription = this.servicesTopic.topicAllSubject.subscribe((topicServiceList:Topic[]) => {
      this.topicList=<Topic[]>topicServiceList;
      if (topicServiceList===undefined){
        this.topicList=[];
      }
      this.filteredTopics=new Observable(observer => {
        observer.next(topicServiceList);
      });
    });
    this.servicesTopic.emitAllTopics();
  }

  ngOnInit(): void {   
    this.myForm = this.formBuilder.group({
      title: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(100)]],
      message: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(3000)]],
      modifytitle: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(100)]]
    });  

    if (this.filteredTopics) {
    this.filteredTopics = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );}
    this.mousecheck();
    this.mousecheckclick();
  }

  private _filter(value: string): Topic[] {
    const filterValue = value.toLowerCase();
    let TitleTab: Topic[]=[];
    this.topicList.forEach(topic => {
      TitleTab.push(topic);
    });

    return TitleTab.filter(topic => topic.title.toLowerCase().indexOf(filterValue) === 0);
  }

  getTitleErrors(): string|void{
    if (this.myForm.controls.title.hasError('required')){
      return 'Ce champ est requis';
    }
    if (this.myForm.controls.title.hasError('minLength')){
      return "Le titre doit comporter au minimum 5 caractères";
    }
    if (this.myForm.controls.title.hasError('maxLength')){
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

  getModifyTitleErrors(): string|void{
    if (this.myForm.controls.modifytitle.hasError('required')){
      return 'Ce champ est requis';
    }
    if (this.myForm.controls.modifytitle.hasError('minLength')){
      return "Le titre doit comporter au minimum 5 caractères";
    }
    if (this.myForm.controls.modifytitle.hasError('maxLength')){
      return "Le titre doit comporter au maximum 100 caractères";
    }
  }
  
  mouseEnterlist(i:number){
    this.booleanlistisover[i]=true; 
  }

  mouseLeavelist(i:number){
    this.booleanlistisover[i]=false; 
  }
  
   mousecheck(){
    if(this.topicList){
      for (let i=0;i<this.topicList.length;i++){
        this.booleanlistisover.push(false);
      }
    }
  }

  goToTopic(id:number) {
    this.servicesTopic.getTopic2(id);
    
      
  }

  delete (topic:Topic) {
      if (this.connectedUser===topic.author || this.connectedUser.admin===1) {
        this.servicesTopic.deleteTopic(topic.id);
        this.servicesUser.redirectToHomePage();
      } else { this.snackBar.open("Droits insuffisant pour supprimer ce sujet!","Ok",{duration:4000})}
  }

  modifyvalidation (topic:Topic) {
      this.servicesTopic.modifTopic(this.myForm.value.modifytitle,topic.id);
      this.cancel(topic);
  }

  modify (topic:Topic) {
    if (this.connectedUser===topic.author || this.connectedUser.admin===1) {
        this.mouseClicklist(topic);
    } else { this.snackBar.open("Droits insuffisant pour modifier ce sujet!","Ok",{duration:4000})}
  }

  cancel (topic:Topic){
    this.booleanlistisclicked[topic.id-1]=false; 
    this.router.navigate(['']);
  }

  mouseClicklist (topic:Topic) {
    this.booleanlistisclicked[topic.id-1]=true; 
  }
  
   mousecheckclick () {
    if(this.topicList){
      for (let i=0;i<this.topicList.length;i++){
        this.booleanlistisclicked.push(false);
      }
    }
  }

  ajout () {
    let dateTime:number = new Date().getTime();
    this.servicesTopic.createTopic(this.myForm.value.title,dateTime,this.myForm.value.message);
  }

}