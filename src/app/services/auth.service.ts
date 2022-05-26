import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any;

  constructor(private auth:AngularFireAuth) {
    auth.authState.subscribe(data =>{
      this.user = data;
    })
   }

  login( user:string, pass:string){
    return this.auth.signInWithEmailAndPassword(user, pass)
  }

  registrar(name:string, clave:string){
    return this.auth.createUserWithEmailAndPassword(name,clave);
  }


  logOut(){
    return this.auth.signOut();
  }

  getUserLogged(){
    return this.auth.authState;
  }

}
