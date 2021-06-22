import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageModifComponent } from './page-modif/page-modif.component';

const routes: Routes = [
  {path: '',component: LoginPageComponent},
  {path:'modif',component:PageModifComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
