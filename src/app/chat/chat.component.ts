import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Mensaje } from '../interfaces/mensaje.interface';
import { AuthService } from '../services/auth.service';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  usuarioLogueado:any;
  nuevoMensaje:string = '';
  mensajes:Mensaje[]=[
    // {
    //   emisorEmail:'test@gmail.com',
    //   emisorDisplayName:'',
    //   texto:'Hola que Tal',
    //   fecha:''
    // },
    // {
    //   emisorEmail:'test@gmail.com',
    //   emisorDisplayName:'',
    //   texto:'Todo bien',
    //   fecha:''
    // },
    // {
    //   emisorEmail:'test@gmail.com',
    //   emisorDisplayName:'',
    //   texto:'Vos como andas?',
    //   fecha:''
    // },
    // {
    //   emisorEmail:'pepito@gmail.com',
    //   emisorDisplayName:'',
    //   texto:'Lindos juegos',
    //   fecha:''
    // },
    // {
    //   emisorEmail:'pepe@gmail.com',
    //   emisorDisplayName:'',
    //   texto:'Hola que Tal',
    //   fecha:''
    // }
  ]

  constructor(private auth:AuthService, private firestore: AngularFirestore, private chatService: ChatService) {}

  ngOnInit(): void {
    this.auth.getUserLogged().subscribe(user=>{
      this.usuarioLogueado = user;
    });

    this.chatService.cargarMensajes().subscribe( mjs =>{
      this.mensajes = mjs;
      // this.mensajes.forEach( a =>{
      //   console.log(a.fecha)
      //   console.log(new Date(a.fecha));
      // })

      // this.mensajes.sort((a,b)=>{
      //   let date1 = new Date(a.fecha);
      //   let date2 = new Date(b.fecha);
      //   return date1 - date2;
      // })
    })



  }

  enviarMensaje(){
    // console.log(this.nuevoMensaje);
    console.log('Envié mensaje')

    const tiempo = new Date().getTime();
    const fecha = new Date(tiempo);    
    const fechaParseada = fecha.toString();

    let mensaje:Mensaje = {
      emisorId:this.usuarioLogueado.uid,
      emisorEmail:this.usuarioLogueado.email,
      emisorDisplayName: this.usuarioLogueado.displayName ? this.usuarioLogueado.displayName : '',
      texto: this.nuevoMensaje,
      fecha: fechaParseada
    }


    // this.mensajes.push(mensaje)
    this.chatService.enviarMensaje(mensaje)
    
    
    this.chatService.cargarMensajes().subscribe( mjs =>{
      this.mensajes = mjs;
    })

    this.nuevoMensaje='';

  }

  verUsuarioLogueado(){
    this.auth.getUserLogged().subscribe(res =>{
      console.log(res);
    })
  }

  // verDatosFirestore(){
  //   this.items.subscribe( items =>{
  //     console.log(items)
  //   })
  // }

}
