import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {serviceUser} from './Services/serviceUser'
import {serviceTopic} from './Services/serviceTopic'
import {serviceMessage} from './Services/serviceMessage'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
=======
import { PageModifComponent } from './page-modif/page-modif.component';
>>>>>>> 9f3bcb2b2d33e8b5ba7d28a2da3c8c7cbc16ff57
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PageModifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [serviceUser,
              serviceMessage,
              serviceTopic],
  bootstrap: [AppComponent]
})
export class AppModule { }
