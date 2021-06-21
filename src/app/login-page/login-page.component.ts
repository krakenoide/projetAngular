import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,NgForm,Validators} from '@angular/forms'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  myFormLoginPage!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myFormLoginPage = this.formBuilder.group({
      username: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
      password: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]]
    });
  } 
  
  ngOnSummit(): void {
      console.log(this.myFormLoginPage.value);
  }

}
