import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationPageComponent } from './components/creation-page/creationpage.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/homepage.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PageModifComponent } from './components/page-modif/page-modif.component';
import { TopicpageComponent } from './components/topic-page/topic-page.component';

const routes: Routes = [
<<<<<<< HEAD
	{path: 'login',component: LoginPageComponent},
	{path:'modif',component:PageModifComponent},
	{path: '', component:HomePageComponent},
	{path: 'creationpage', component:CreationPageComponent},
	{path: 'header', component:HeaderComponent}
=======
  {path: 'login',component: LoginPageComponent},
  {path:'modif',component:PageModifComponent},
  {path: '', component:HomePageComponent},
  {path: 'creationpage', component:CreationPageComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'topic/:id' , component:TopicpageComponent}
>>>>>>> 53f8c02cbb7d7090cc2e62433afd7ba1d1cbbb9b
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
