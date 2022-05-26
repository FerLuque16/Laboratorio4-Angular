import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoginComponent } from './auth/pages/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { Ejercicio1Component } from './components/ejercicio1/ejercicio1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
// import { RegistroComponent } from './auth/pages/registro/registro.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { JuegosRoutingModule } from './components/juegos/juegos-routing.module';
import { EncuestaComponent } from './components/encuesta/encuesta.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuienSoyComponent,
    Ejercicio1Component,
    NotFoundComponent,
    EncuestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AuthRoutingModule,
    JuegosRoutingModule,
    SharedModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    ReactiveFormsModule
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
