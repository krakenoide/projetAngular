import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {serviceConnected} from './serviceConnected'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageModifComponent } from './page-modif/page-modif.component';

@NgModule({
  declarations: [
    AppComponent,
    PageModifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [serviceConnected],
  bootstrap: [AppComponent]
})
export class AppModule { }
