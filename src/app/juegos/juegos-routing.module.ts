import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { AhorcadoComponent } from './pages/ahorcado/ahorcado.component';
import { MayormenorComponent } from './pages/mayormenor/mayormenor.component';
import { PreguntadosComponent } from './pages/preguntados/preguntados.component';
import { ReflejosComponent } from './pages/reflejos/reflejos.component';
import { JuegosComponent } from './pages/juegos.component';

const routes:Routes=[
  {
    path:'',
    component:JuegosComponent,
    children:[
      {
        path:'menu',
        component:MenuComponent
      },
      {
        path:'ahorcado',
        component:AhorcadoComponent
      },
      {
        path:'mayormenor',
        component:MayormenorComponent
      },
      {
        path:'preguntados',
        component:PreguntadosComponent
      },
      {
        path:'reflejos',
        component:ReflejosComponent
      },
      {
        path:'**',
        redirectTo:'menu'
      }

    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class JuegosRoutingModule { }
