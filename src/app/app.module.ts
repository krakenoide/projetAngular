import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {serviceUser} from './Services/serviceUser'
import {serviceTopic} from './Services/serviceTopic'
import {serviceMessage} from './Services/serviceMessage'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageModifComponent } from './page-modif/page-modif.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';



@NgModule({
  declarations: [
    AppComponent,
    PageModifComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [serviceUser,
              serviceMessage,
              serviceTopic],
  bootstrap: [AppComponent]
})
export class AppModule { }
