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
  isAuth = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.myForm = this.formBuilder.group({
      username: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
      password: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]]
    });
  } 
  
  onSubmit(): void {
      console.log('onSubmit');
      this.isAuth =true;
      console.log(this.myForm.value);
  }

}
