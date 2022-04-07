import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejercicio1Component } from './components/ejercicio1/ejercicio1.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';

const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'quiensoy',component:QuienSoyComponent},
  {path:'ejercicio',component:Ejercicio1Component},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
