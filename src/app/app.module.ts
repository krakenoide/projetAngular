import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
=======
import {serviceUser} from './Services/serviceUser'
import {serviceTopic} from './Services/serviceTopic'
import {serviceMessage} from './Services/serviceMessage'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageModifComponent } from './page-modif/page-modif.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> 9f3bcb2b2d33e8b5ba7d28a2da3c8c7cbc16ff57

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
=======
    PageModifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
>>>>>>> 9f3bcb2b2d33e8b5ba7d28a2da3c8c7cbc16ff57
  ],
  providers: [serviceUser,
              serviceMessage,
              serviceTopic],
  bootstrap: [AppComponent]
})
export class AppModule { }
