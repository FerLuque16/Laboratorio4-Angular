import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  letras:string[] = [];

  palabras:string[] = ['auto','casa','avion','patio','cocina','luz','ciudad','teclado','pantalla'];

  palabraAdivinar:string[] = [];
  palabraAMostrar:string[] = [];

  palabraElegida:string = '';//Palabra a la cual voy a estar adivinando

  palabraResultado: string = '';

  letrasRestantes: number = 0;

  cantidadIntentos: number = 0;


  displayModal:boolean = false;
  modalMsj1:string = '';
  modalMsj2: string = '';




  constructor(private ruteo: Router){

  }
  ngOnInit(): void {
    this.iniciarJuego();
    // console.log(this.palabraElegida)
  }

  iniciarJuego(){

    this.letras= [
      'a','b','c','d','e','f','g','h','i','j','k',
      'l','m','n','ñ','o','p','q','r','s','t','u',
      'v','w','x','y','z'];
    this.palabraAdivinar = [];
    this.palabraAMostrar = [];
    this.palabraElegida = '';//Palabra a la cual voy a estar adivinando
    this.palabraResultado = '';
    this.letrasRestantes = 0;
    this.cantidadIntentos = 5;

    const numeroRandom = this.randomNumber();
    // console.log(numeroRandom)
    this.palabraElegida = this.palabras[numeroRandom];
    this.palabraAdivinar = this.palabraElegida.split('');
    
    this.palabraAdivinar.forEach(e =>this.palabraAMostrar.push('_'));
    this.palabraResultado = this.palabraAMostrar.join('');
    this.letrasRestantes = this.palabraAMostrar.length;

    // console.log(this.palabraAdivinar,this.palabraAdivinar.length)
    // console.log(this.palabraAMostrar,this.palabraAMostrar.length)
    // console.log(this.letrasRestantes)


    // console.log(this.palabraAdivinar)
  }

  reiniciar(){
    // this.palabraElegida = '';
    this.displayModal = false;
    this.iniciarJuego();
  }

  terminarJuego(){
    this.displayModal = false;
    this.ruteo.navigateByUrl('juegos')
  }

  letraSeleccionada(letra:string){
    console.log(letra);
    if(this.palabraAdivinar.includes(letra)){


      this.palabraAdivinar.forEach((a,index) => {

        if(a == letra){
          this.palabraAMostrar[index] = a 
          this.letrasRestantes--;
          // console.log(this.letrasRestantes)
        }
      })

      if(this.letrasRestantes == 0){
        setTimeout(() => {
          this.mostrarModal('GANASTE','¿Queres seguir jugando?');
        }, 500);     
      }

      console.log(this.letras.indexOf(letra));

      this.letras.splice(this.letras.indexOf(letra),1);
      // console.log(this.letras)
      // console.log(this.palabraAdivinar)
      // console.log(this.palabraAMostrar)
      this.palabraResultado = this.palabraAMostrar.join('');
      // console.log(this.palabraAMostrar)
    }
    else{
      this.cantidadIntentos--;
      this.letras.splice(this.letras.indexOf(letra),1);
      if(this.cantidadIntentos == 0){
        setTimeout(() => {
          this.mostrarModal('PERDISTE','¿Queres seguir jugando?')
        }, 500);
        
        // this.reiniciar()
      }
    }
  }

  randomNumber(){
    return Math.floor(Math.random() * this.palabras.length);
  }

  mostrarModal(msj1:string,msj2:string){
    this.displayModal=true;
    this.modalMsj1 = msj1;
    this.modalMsj2 = msj2;
  }
//   mandarPuntaje(){
//     // this.puntajesService.enviarResultado(this.puntajeAcumulado,this.Usuario.id,this.Usuario.email, "ahorcado");
//   }
}
