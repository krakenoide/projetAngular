import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Topic } from 'src/app/modeles/Topic';
import { serviceMessage } from 'src/app/Services/serviceMessage';
import { serviceTopic } from 'src/app/Services/serviceTopic';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


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



  constructor(private formbuilder : FormBuilder, private services:serviceTopic, private route : ActivatedRoute) {
   
   }
  
      

      
  
  ngOnInit(): void {
    // creer une propriété topic 
    // souscrire au topic subject et dans le subscribe  assigner le retour du subscribe a la propriété topic
    // faire un appel de emitactivetopic
    
    const topic_id = this.route.snapshot.params['id'];

    this.topicsubscription=this.services.topicSubject.subscribe((currentTopic :Topic) => {
      this.activeTopic= currentTopic;
    })


    




    this.services.emitActiveTopic();

    

    



    this.myform=this.formbuilder.group({
      content:['',[Validators.required,Validators.maxLength(3000),Validators.minLength(5)]]
    

    });
    this.myrefreshbutton=this.formbuilder.group({});

  }

 
  

 

onSubmit(): void{
  console.log(this.myform.value);
}

refresh(): void {
  console.log("j'ai refresh");
  //getAllmessages()
}

}
