import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { serviceUser } from './Services/serviceUser'
import { serviceTopic } from './Services/serviceTopic'
import { serviceMessage } from './Services/serviceMessage'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from'@angular/common/http';
import { CreationPageComponent } from './components/creation-page/creationpage.component';
import { HomePageComponent } from './components/home-page/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PageModifComponent } from './components/page-modif/page-modif.component';


@NgModule({
  declarations: [
    AppComponent,
    CreationPageComponent,
    HomePageComponent,
    HeaderComponent,
    LoginPageComponent,
    PageModifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [serviceUser,
              serviceMessage,
              serviceTopic],
  bootstrap: [AppComponent]
})
export class AppModule { }
