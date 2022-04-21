import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejercicio1Component } from './components/ejercicio1/ejercicio1.component';
import { HomeComponent } from './components/home/home.component';
import { MenuJuegosComponent } from './components/juegos/menu-juegos/menu-juegos.component';
import { PreguntadoComponent } from './components/juegos/preguntado/preguntado.component';
import { TatetiComponent } from './components/juegos/tateti/tateti.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [

  {path:'',redirectTo: 'home', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {
    path:'menujuegos',component:MenuJuegosComponent,children:[
    {
      path:'',component:PreguntadoComponent
    },
    {
      path:'tateti',component:TatetiComponent
    },
    {
      path:'preguntado',component:PreguntadoComponent
    }
  ]},
  {path:'registro',component:RegistroComponent},
  {
    path:'home', component:HomeComponent
  },
  {
    path:'quiensoy',component:QuienSoyComponent
  },
  {
    path:'ejercicio',component:Ejercicio1Component
  },
  {
    path:'**',component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
