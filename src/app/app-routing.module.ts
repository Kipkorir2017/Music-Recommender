import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {LandingComponent} from './components/landing/landing.component';
import { GospelComponent } from './categories/gospel/gospel.component';
import { HiphopComponent } from './categories/hiphop/hiphop.component';
import { RnBComponent } from './categories/rn-b/rn-b.component';
import { ReggaeComponent } from './categories/reggae/reggae.component';

const routes: Routes = [
  {path: '', component:LandingComponent},
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path:'gospel',component:GospelComponent},
  {path:'hiphop',component:HiphopComponent},
  {path:'reggae',component:ReggaeComponent},
  {path:'rnb',component:RnBComponent},
  {path:'**', component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
