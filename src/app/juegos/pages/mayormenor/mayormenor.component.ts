import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs';
import { Card } from 'src/app/interfaces/carta.interface';
import { AuthService } from 'src/app/services/auth.service';
import { CartasService } from '../../services/cartas.service';
import { ResultadosService } from '../../services/resultados.service';
import { Resultado } from 'src/app/interfaces/resultado.interface';


@Component({
  selector: 'app-mayormenor',
  templateUrl: './mayormenor.component.html',
  styleUrls: ['./mayormenor.component.css']
})
export class MayormenorComponent implements OnInit {

  cartas:Card[] = [];
  cartaAMostrar!: Card;
  cartaSiguiente!: Card;

  cantidadIntentos:number = 5;
  
  cantidadAciertos:number = 0;

  buttonDisabled:boolean = false;

  mensajeResultado:string = '';

  displayModal:boolean = false;
  modalMsj1:string = '';
  modalMsj2: string = '';

  user:any;

  constructor(private cartaService:CartasService, private ruteo: Router, private auth: AuthService, private resultadoService: ResultadosService) { 
    auth.getUserLogged().subscribe(usr =>{
      this.user =  usr
    })
  }

  ngOnInit(): void {
    this.iniciarJuego();
  }

  iniciarJuego(){
    this.cantidadIntentos = 5;
    this.cantidadAciertos = 0;
    this.cartaService.obtenerBaraja().pipe(
      mergeMap(res1 => this.cartaService.obtenerMano(res1.deck_id))
    ).subscribe(res2 =>{
      this.cartas = res2.cards.filter( carta => !isNaN(parseInt(carta.value)));

      this.cartaAMostrar = {...this.cartas[this.randomNumber()]};
    })
  }


  compararMenor(){

    this.cartaSiguiente = this.obtenerSiguienteCarta();
    console.log(this.cartaAMostrar)
    console.log(this.cartaSiguiente)
    if( parseInt(this.cartaSiguiente.value) < parseInt(this.cartaAMostrar.value)){
      console.log('ACERTASTE');

      this.mensajeResultado = 'ACERTASTE!'
      this.cantidadAciertos++;
    }
    else{
      this.mensajeResultado = 'FALLASTE!'
      console.log('FALLASTE')
    }
    // this.cartaAMostrar.image = '';
    setTimeout(() => {
      
      this.cartaAMostrar = {...this.cartaSiguiente}
      this.mensajeResultado = '';
    }, 500);
    
    this.cantidadIntentos--;
    console.log(this.cantidadIntentos)
    if(this.cantidadIntentos == 0){
      setTimeout(() => {
        console.log(this.cantidadAciertos)
        this.mostrarModal('JUEGO TERMINADO',`Lograste ${this.cantidadAciertos} aciertos en 5 intentos`)
        // alert(`Juego terminado lograste ${this.cantidadAciertos} aciertos en 5 intentos`);
      }, 200);
    }
  }
  compararMayor(){
    this.cartaSiguiente = this.obtenerSiguienteCarta();
    
    // console.log(this.cartaAMostrar)
    // console.log(this.cartaSiguiente)




    if( parseInt(this.cartaSiguiente.value) > parseInt(this.cartaAMostrar.value)){
      console.log('ACERTASTE');
      this.mensajeResultado = 'ACERTASTE!'
      this.cantidadAciertos++;
      console.log(this.cantidadAciertos)
    }
    else{
      this.mensajeResultado = 'FALLASTE!'
      console.log('FALLASTE')
    }

    //this.cartaAMostrar.image = '';
    setTimeout(() => {
      this.cartaAMostrar = {...this.cartaSiguiente}
      this.mensajeResultado = '';
    }, 500);
    

    this.cantidadIntentos--;
    console.log(this.cantidadIntentos)
    if(this.cantidadIntentos == 0){
      setTimeout(() => {
        console.log(this.cantidadAciertos)
        this.mostrarModal('JUEGO TERMINADO',`Lograste ${this.cantidadAciertos} aciertos en 5 intentos`)
        // alert(`Juego terminado lograste ${this.cantidadAciertos} aciertos en 5 intentos`);
      }, 200);
    }
    
    
  }

  obtenerSiguienteCarta():Card{
    return this.cartas[this.randomNumber()]
  }

  randomNumber(){
    return Math.floor(Math.random() * this.cartas.length);
  }

  mostrarModal(msj1:string,msj2:string){
    this.displayModal=true;
    this.modalMsj1 = msj1;
    this.modalMsj2 = msj2;
  }

  
  reiniciar(){
    this.displayModal = false;
    this.iniciarJuego();
    // this.cartaAMostrar = {...this.cartas[this.randomNumber()]};
  }

  terminarJuego(){
    this.displayModal = false;
    const tiempo = new Date().getTime();
    const fecha = new Date(tiempo);    
    const fechaParseada = fecha.toString();

    let resultado: Resultado = {
      uid: this.user.uid,
      email: this.user.email,
      fecha: fechaParseada,
      juego: 'Mayor o menor',
      aciertos: this.cantidadAciertos,
      intentos: 5
    }

    this.resultadoService.enviarResultado(resultado);
    this.ruteo.navigateByUrl('/juegos');

  }


  // T

}
