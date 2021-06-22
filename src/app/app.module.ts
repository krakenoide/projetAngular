import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {serviceUser} from './Services/serviceUser'
import {serviceTopic} from './Services/serviceTopic'
import {serviceMessage} from './Services/serviceMessage'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreationPageComponent } from './components/creation-page/creationpage.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/homepage.component';
import { PageModifComponent } from './components/page-modif/page-modif.component';

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
