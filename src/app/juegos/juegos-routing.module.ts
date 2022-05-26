import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { AhorcadoComponent } from './pages/ahorcado/ahorcado.component';
import { MayormenorComponent } from './pages/mayormenor/mayormenor.component';
import { PreguntadosComponent } from './pages/preguntados/preguntados.component';
import { ReflejosComponent } from './pages/reflejos/reflejos.component';
import { JuegosComponent } from './pages/juegos.component';
import { UserGuard } from '../guards/user.guard';

const routes:Routes=[
  {
    path:'',
    component:JuegosComponent,
    children:[
      {
        path:'menu',
        component:MenuComponent,
        canActivate:[UserGuard]
      },
      {
        path:'ahorcado',
        component:AhorcadoComponent,
        canActivate:[UserGuard]
      },
      {
        path:'mayormenor',
        component:MayormenorComponent,
        canActivate:[UserGuard]
      },
      {
        path:'preguntados',
        component:PreguntadosComponent,
        canActivate:[UserGuard]
      },
      {
        path:'reflejos',
        component:ReflejosComponent,
        canActivate:[UserGuard]
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
