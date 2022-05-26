import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReflejosComponent } from './pages/reflejos/reflejos.component';
import { PreguntadosComponent } from './pages/preguntados/preguntados.component';
import { MayormenorComponent } from './pages/mayormenor/mayormenor.component';
import { AhorcadoComponent } from './pages/ahorcado/ahorcado.component';
import { MenuComponent } from './pages/menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { JuegosComponent } from './pages/juegos.component';
import { UserGuard } from '../../guards/user.guard';


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
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class JuegosRoutingModule { }
