import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Topic } from 'src/app/modeles/Topic';
import { serviceTopic } from 'src/app/Services/serviceTopic';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { serviceMessage } from 'src/app/Services/serviceMessage';
import { User } from 'src/app/modeles/User';
import { serviceUser } from 'src/app/Services/serviceUser';

@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',

})
export class TopicpageComponent implements OnInit {
  myform!: FormGroup;
  myrefreshbutton! : FormGroup;
  activeTopic !: Topic;
  topicSubscription !: Subscription;
  activeid !: number;
  userSubscription!: Subscription;
  connectedUser!: User;

  constructor(private formbuilder : FormBuilder, private servicestopic:serviceTopic, private router :Router,private servicesmessage:serviceMessage , private servicesuser:serviceUser) {
    
  }
  
  ngOnInit(): void {   
   this.userSubscription = this.servicesuser.userSubject.subscribe((connectedUser:User) => {this.connectedUser=connectedUser;
    })
    this.servicesuser.emitConnectedUser();
    this.topicSubscription = this.servicestopic.topicSubject.subscribe((activeTopic:Topic) => {this.activeTopic=activeTopic;
    })
    this.servicestopic.emitActiveTopic();
   

    console.log(this.activeTopic);


    this.myform=this.formbuilder.group({
      content:['',[Validators.required,Validators.maxLength(3000),Validators.minLength(5)]]
    

    });
    this.myrefreshbutton=this.formbuilder.group({});

  }

onSubmit(): void{
	this.servicesmessage.createMessage(this.myform.value.content,25062021);  

}

refresh(): void {
  this.servicestopic.getTopic2(this.activeTopic.id);


}

}
