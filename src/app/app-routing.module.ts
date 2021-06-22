import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path: 'login',component: LoginPageComponent}
];

@NgModule({
  declarations:[AppComponent],
  imports: [RouterModule.forRoot(routes)],
  providers:[],
  exports: [RouterModule],
  bootstrap:[AppComponent]
})
export class AppRoutingModule { }
