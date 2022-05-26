import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejercicio1Component } from './components/ejercicio1/ejercicio1.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { RegistroComponent } from './auth/pages/registro/registro.component';
import { JuegosModule } from './juegos/juegos.module';
import { ChatModule } from './chat/chat.module';

const routes: Routes = [

  {path:'',redirectTo: 'home', pathMatch:'full'},
  // {path:'login',component:LoginComponent},
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'juegos',
    loadChildren:()=>import('./juegos/juegos.module').then(m => JuegosModule)
  },
  {
    path:'chat',
    loadChildren:()=>import('./chat/chat.module').then(m => ChatModule)
  },
  // {path:'registro',component:RegistroComponent},
  {
    path:'home', component:HomeComponent
  },
  {
    path:'error',component:NotFoundComponent
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
