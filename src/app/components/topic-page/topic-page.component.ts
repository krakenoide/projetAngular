import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html'
  
})
export class TopicpageComponent implements OnInit {
  myform!: FormGroup;
  myrefreshbutton! : FormGroup;


  constructor(private formbuilder : FormBuilder) { }

  ngOnInit(): void {
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
}

}
