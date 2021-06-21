import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageCreationComponent } from './page-creation/page-creation.component';
import { PageModifComponent } from './page-modif/page-modif.component';

@NgModule({
  declarations: [
    AppComponent,
    PageCreationComponent,
    PageModifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
