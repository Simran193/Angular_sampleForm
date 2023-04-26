import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { UserComponent } from './component/user-list/user/user.component';


const routes: Routes = [
  {
    path:'sign-up',
    component:SignUpComponent
  },
  {
    path:'user-list',
    component:UserComponent
  },
  {
    path:'',
    redirectTo: 'sign-up',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
