import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreguntadosComponent } from './pages/preguntados/preguntados.component';
import { MayormenorComponent } from './pages/mayormenor/mayormenor.component';
import { AhorcadoComponent } from './pages/ahorcado/ahorcado.component';
import { ReflejosComponent } from './pages/reflejos/reflejos.component';
import { MenuComponent } from './pages/menu/menu.component';
import { JuegosComponent } from './pages/juegos.component';
import { JuegosRoutingModule } from './juegos-routing.module';
import { ChatModule } from '../../chat/chat.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    PreguntadosComponent,
    MayormenorComponent,
    AhorcadoComponent,
    ReflejosComponent,
    MenuComponent,
    JuegosComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    SharedModule,
    ChatModule
  ]
})
export class JuegosModule { }
