import { Component, OnInit} from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import {Observable,Subscription} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { User } from 'src/app/modeles/User';
import { Topic } from 'src/app/modeles/Topic';
import { serviceUser } from '../../Services/serviceUser';
import { serviceTopic } from '../../Services/serviceTopic';
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';

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
	booleanlist:boolean[]=[];
	topicSubscription!: Subscription;
	userSubscription!: Subscription;

	constructor(private formBuilder: FormBuilder,private servicesUser:serviceUser,
		private servicesTopic:serviceTopic,private router:Router,private snackBar:MatSnackBar) { 
		this.userSubscription = this.servicesUser.userSubject.subscribe((connectedUser:User) => {
			this.connectedUser=connectedUser;
		});
		this.servicesUser.emitConnectedUser();
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
			message: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(3000)]]
		});  

		if (this.filteredTopics) {
			this.filteredTopics = this.myControl.valueChanges.pipe(
			startWith(''),
			map(value => this._filter(value))
		);}
		this.mousecheck();
		
		
	}

	private _filter(value: string): Topic[] {
		const filterValue = value.toLowerCase();
		let TitleTab: Topic[]=[];
		this.topicList.forEach(topic => {
			TitleTab.push(topic);
		});

		return TitleTab.filter(topic => topic.title.toLowerCase().indexOf(filterValue) === 0);
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
		if(this.topicList){
			for (let i=0;i<this.topicList.length;i++){
				this.booleanlist.push(false);
			}
		}
	}
	goToTopic(id:number) {
		this.servicesTopic.activeTopic=this.servicesTopic.getTopic(id);
		this.router.navigate(['topic']);
	}

	delete (topic:Topic) {
		if (this.connectedUser===topic.author || this.connectedUser.admin===1) {
			this.servicesTopic.deleteTopic(topic.id);
		} else { 
			this.snackBar.open("Droits insuffisant pour supprimer ce sujet!","Ok",{duration:4000})
		}
	}

	modify (topic:Topic) {
		if (this.connectedUser===topic.author || this.connectedUser.admin===1) {
			this.servicesTopic.modifTopic("placeholder",topic.id);
		} else { 
			this.snackBar.open("Droits insuffisant pour modifier ce sujet!","Ok",{duration:4000})
		}
	}
}