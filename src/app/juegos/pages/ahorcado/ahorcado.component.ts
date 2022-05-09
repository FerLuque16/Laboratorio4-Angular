import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  letras:string[] = [];

  palabras:string[] = ['auto','casa'];

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
    console.log(this.palabraElegida)
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
    console.log(numeroRandom)
    this.palabraElegida = this.palabras[numeroRandom];
    this.palabraAdivinar = this.palabraElegida.split('');
    
    this.palabraAdivinar.forEach(e =>this.palabraAMostrar.push('_'));
    this.palabraResultado = this.palabraAMostrar.join('');
    this.letrasRestantes = this.palabraAMostrar.length;

    console.log(this.palabraAdivinar,this.palabraAdivinar.length)
    console.log(this.palabraAMostrar,this.palabraAMostrar.length)
    console.log(this.letrasRestantes)


    console.log(this.palabraAdivinar)
  }

  reiniciar(){
    // this.palabraElegida = '';
    this.displayModal = false;
    this.iniciarJuego();
  }

  terminarJuego(){
    this.ruteo.navigateByUrl('juegos')
  }

  letraSeleccionada(letra:string){
    console.log(letra);
    if(this.palabraAdivinar.includes(letra)){


      this.palabraAdivinar.forEach((a,index) => {

        if(a == letra){
          this.palabraAMostrar[index] = a 
          this.letrasRestantes--;
          console.log(this.letrasRestantes)
        }
      })

      if(this.letrasRestantes == 0){
        setTimeout(() => {
          this.mostrarModal('GANASTE','¿Queres seguir jugando?');
        }, 500);     
      }

      console.log(this.letras.indexOf(letra));

      this.letras.splice(this.letras.indexOf(letra),1);
      console.log(this.letras)
      console.log(this.palabraAdivinar)
      console.log(this.palabraAMostrar)
      this.palabraResultado = this.palabraAMostrar.join('');
      console.log(this.palabraAMostrar)
    }
    else{
      this.cantidadIntentos--;
      if(this.cantidadIntentos == 0){
        setTimeout(() => {
          alert('PERDISTE BURRO!!!!');
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

  // evaluarLetra(letra:string){

  // }
//   arrayPalabras:Array<any> = ['INFORMATICA', 'COSAS', 'BOLSA', 'CAJA', 'MOUSE', 'TELEFONO','CELULAR','BOTELLA', 'DESODORANTE', 'CARAMELOS', 'BILLETE','SONAJERO','CENA','CORDERO'];
//   cantidadPalabras: number = this.arrayPalabras.length;
//   indiceArray: number | undefined | null;
//   palabraElegida:any;

//   palabraAdivinar:any[] = [];
//   palabraMostrar:any[] = [];
//   nodoResultado:any;
//   cantidadDeIntentos:number | undefined;
//   // Usuario: Usuario = new Usuario();
//   puntajeAcumulado:number=0;
//   constructor() { }

//   ngOnInit(): void {
//     // if (this.authService.getItemLocal()==null)
//     // {
//     //   this.Usuario.estaLogueado=false;
//     // }else
//     // {
//     //   this.Usuario  = this.authService.getItemLocal();
//     // }
//     this.prepararJuego();
//   }

//   compararLetra(recibida:string)
//   {
//     let letraUsuario:string = recibida;
//     // Recorremos todas las letras para saber si alguna esta bien
//     for (const [posicion, letraAdivinar] of this.palabraAdivinar.entries()) {
//         // Comprobamos si la letra del usuario es igual a la letra a adivinar
//         if (letraUsuario == letraAdivinar) {
//             // Sustituimos el guion por la letra acertada
//             this.palabraMostrar[posicion] = letraAdivinar;
//         }
//     }
//       if (!this.palabraAdivinar.includes(letraUsuario))
//       {
//         console.log(" antes " +this.cantidadDeIntentos);
//         this.cantidadDeIntentos = this.cantidadDeIntentos!-1;
//         console.log("dsps " +this.cantidadDeIntentos);
//       }

//       if (this.cantidadDeIntentos==0){
//         // this.authService.showErrorWithTimeout("Perdiste","Perdiste",2000);
//         this.mandarPuntaje();
//         this.empezarDeNuevo();//probar si empeiza bien
//       }
//       if (!this.palabraMostrar.includes("_")){
//         console.log(this.palabraAdivinar.includes("_"));
//         // this.authService.showSuccessWithTimeout("Ganaste","Ganaste",2000);
//         this.puntajeAcumulado=this.puntajeAcumulado+10;
//       }

//     //// 4 Mostramos los cambios
//     this.dibujarJuego();

//   }

//   prepararJuego () {
//     this.cantidadDeIntentos=10;
//     this.indiceArray= Math.floor(Math.random() * (this.cantidadPalabras -1));
//     this.palabraElegida = this.arrayPalabras[this.indiceArray];
//     console.log(this.palabraElegida);
//     //// 1.3 Separo la palabra en letras y lo guardo
//     this.palabraAdivinar = this.palabraElegida.split('');
//     //// 2 Preparo el array que va a ver el usuario. Tendrá el mismo número de guiones que letras en palabraAdivinar
//    for (var i=0;i<this.palabraAdivinar.length;i++){
//      this.palabraMostrar.push('_');
//    }
//     //// 3 Dibuja todo lo necesario
//     this.dibujarJuego();
// }

//   dibujarJuego () {
//     // Convertimos un array en un texto, separado por espacios, y lo mostramos en el div resultado
//     this.nodoResultado = this.palabraMostrar.join(' ');
//   }

//   empezarDeNuevo()
//   {
//     this.indiceArray = null;
//     this.palabraElegida = null;

//     this.palabraAdivinar = [];
//     this.palabraMostrar = [];
//     this.nodoResultado=null;
//     this.prepararJuego();
//   }

//   mandarPuntaje(){
//     // this.puntajesService.enviarResultado(this.puntajeAcumulado,this.Usuario.id,this.Usuario.email, "ahorcado");
//   }
}
