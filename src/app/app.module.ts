import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { Ejercicio1Component } from './components/ejercicio1/ejercicio1.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MenuJuegosComponent } from './components/juegos/menu-juegos/menu-juegos.component';
import { TatetiComponent } from './components/juegos/tateti/tateti.component';
import { PreguntadoComponent } from './components/juegos/preguntado/preguntado.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QuienSoyComponent,
    Ejercicio1Component,
    NotFoundComponent,
    MenuJuegosComponent,
    TatetiComponent,
    PreguntadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
