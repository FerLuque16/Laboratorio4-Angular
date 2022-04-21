import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:AngularFireAuth) { }

  login( user:string, pass:string){
    return this.auth.signInWithEmailAndPassword(user, pass)
  }

  registrar(name:string, clave:string){
    return this.auth.createUserWithEmailAndPassword(name,clave);
  }


  logOut(){
    return this.auth.signOut();
  }

}
