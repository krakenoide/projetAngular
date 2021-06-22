import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { serviceUser } from './Services/serviceUser'
import { serviceTopic } from './Services/serviceTopic'
import { serviceMessage } from './Services/serviceMessage'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageModifComponent } from './page-modif/page-modif.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
=======
import { LoginPageComponent } from './login-page/login-page.component';
import { HttpClientModule } from'@angular/common/http';

>>>>>>> aa223ba29d61215d35f359b6968499c2cb03d847

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
<<<<<<< HEAD
    ReactiveFormsModule
=======
    ReactiveFormsModule,
    HttpClientModule
>>>>>>> aa223ba29d61215d35f359b6968499c2cb03d847
  ],
  providers: [serviceUser,
              serviceMessage,
              serviceTopic],
  bootstrap: [AppComponent]
})
export class AppModule { }
