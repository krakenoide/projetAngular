import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationPageComponent } from './components/creation-page/creationpage.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/homepage.component';
import { PageModifComponent } from './components/page-modif/page-modif.component';

const routes: Routes = [
  {path: 'homepage', component:HomePageComponent},
  {path: 'creationpage', component:CreationPageComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'pagemodif', component:PageModifComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
