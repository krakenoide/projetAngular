import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,NgForm,Validators} from '@angular/forms'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  myForm!: FormGroup;
  message = "bonjour";

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log("Hello");
    this.myForm = this.formBuilder.group({
      username: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
      password: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]]
    });
  } 
  
  onSubmit(): void {
      console.log('Hello World !');
      console.log(this.myForm.value);
      
  }

}
