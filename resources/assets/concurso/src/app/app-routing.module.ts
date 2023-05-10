import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';
import { HomeComponent } from './pages/home/home.component';
import { EditalComponent } from './pages/edital/edital.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"concurso",component:RegistrationComponent},
  {path:"edital",component:EditalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
