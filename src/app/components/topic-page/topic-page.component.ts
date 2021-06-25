import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Topic } from 'src/app/modeles/Topic';
import { serviceTopic } from 'src/app/Services/serviceTopic';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
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
  topicsubscription !: Subscription;
  activeid !: number;
  userSubscription!: Subscription;
  connectedUser!: User;


  constructor(private formbuilder : FormBuilder, private servicest:serviceTopic, private route : ActivatedRoute,private servicesm:serviceMessage , private serviceu:serviceUser) {
   
   }
  
  
  ngOnInit(): void {
    // creer une propriété topic 
    // souscrire au topic subject et dans le subscribe  assigner le retour du subscribe a la propriété topic
    // faire un appel de emitactivetopic
    
    this.userSubscription = this.serviceu.userSubject.subscribe((connectedUser:User) => {this.connectedUser=connectedUser;
    })
    this.serviceu.emitConnectedUser();
    const topic_id = this.route.snapshot.params['id'];

    this.servicest.getTopic(topic_id).subscribe((currentTopic :Topic) => {
      this.activeTopic= currentTopic;
      console.log(this.activeTopic)
    });


    this.myform=this.formbuilder.group({
      content:['',[Validators.required,Validators.maxLength(3000),Validators.minLength(5)]]
    

    });
    this.myrefreshbutton=this.formbuilder.group({});

  }

onSubmit(): void{
  this.servicesm.createMessage(this.myform.value,25062021)
  
  console.log(this.myform.value);
}

refresh(): void {
  this.ngOnInit();
  console.log("j'ai refresh");
  //getAllmessages()
}

}
