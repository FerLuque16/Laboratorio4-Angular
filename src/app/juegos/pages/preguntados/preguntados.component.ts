import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from 'src/app/interfaces/pais.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {

  paises:Pais[] = [];


  paisCorrecto!:Pais;
  paisesPregunta:Pais[] = [];
  preguntas:Pais[] = [];

  displayModal:boolean = false;
  modalMsj1:string = '';
  modalMsj2: string = '';

  constructor(private paisService:PaisesService, private ruteo:Router) { }

  ngOnInit(): void {
    
   this.setearJuego();


    // console.log(this.paises)
  }

  setearJuego(){
    this.paisService.traerPaises().subscribe(res =>{

      this.preguntas = [];
      this.paisesPregunta = [];
      this.paises = res;

      this.paisCorrecto= this.paises[this.randomNumber()]; 

      this.agregarPaisIncorrecto();

      this.preguntas = [...this.paisesPregunta];
      this.preguntas.push(this.paisCorrecto);

      this.preguntas = this.desordenarPreguntas(this.preguntas)

      // console.log(this.paisesPregunta); 
      console.log(this.paises);
      console.log(this.paisCorrecto);

      console.log(this.preguntas)
    })
  }

  reiniciar(){
    this.setearJuego();
    this.displayModal = false;
  }
  terminarJuego(){
    this.ruteo.navigateByUrl('juegos')
  }

  randomNumber(){
    return Math.floor(Math.random() * this.paises.length);
  }

  agregarPaisIncorrecto(){

    for (let i = 0; i < 3; i++) {
      
      let paisAAgregar = this.paises[this.randomNumber()];
      while(paisAAgregar.name.common == this.paisCorrecto.name.common ){
        paisAAgregar = this.paises[this.randomNumber()];
      }
      
      this.paisesPregunta.push(paisAAgregar);
    }
    
  }

  respuestaSeleccionada(item:Pais){
    console.log(item);
    if(item.name.common == this.paisCorrecto.name.common){
      item.correcto = true;
      setTimeout(() => {
        this.mostrarModal('GANASTE','¿Queres seguir jugando?');
      }, 500);
      
      // console.log('GANASTE!!')
    }
    else{
      setTimeout(() => {
        this.mostrarModal('PERDISTE','¿Queres seguir jugando?');
      }, 500);
    }
  }

  desordenarPreguntas(array:Pais[]) {
    for (var i = array.length - 1; i > 0; i--) {
    
        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));
                    
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
        
    return array;
 }
  

  mostrarModal(msj1:string,msj2:string){
    this.displayModal=true;
    this.modalMsj1 = msj1;
    this.modalMsj2 = msj2;
  }

  //Traer los 250 paises o traer de a 1 ??
  // 1-Elegir aleatoriamente el pais correcto
    // Agarrar su name y bandera


  // 2-Elegir otros 3 paises incorrectos para agregarlos a las posibles respuestas
    // Verificar que no sean repetidos y no sea el mismo que el correcto

  // 3-Con ngfor crear los botones de respuesta

  // 4-Al seleccionar la respuesta correcta colorear con verde
  // y volver a seleccionar un pais correcto
    //¿Eliminar el pais ya utilizado del array?

  // 5-Al llegar a los intentos preestablecido, detener el juego.



}
