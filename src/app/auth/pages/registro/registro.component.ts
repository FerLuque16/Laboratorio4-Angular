import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  user:string = '';
  pass: string = '';

  constructor(private firestore: AngularFirestore, public auth:AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  async registrar(name:string, pass:string){
    try {
      await this.auth.registrar(name,pass);

      console.log("El usuario se registró correctamente");
    } catch (error:any) {
      //this.toastr.error(this.utilidad.convertirMensaje(error.code),'Error al registrarse');
      console.log(error.code);
      
    }
  }

  redirigir(path:string){
    this.router.navigateByUrl(path);
  }

}
