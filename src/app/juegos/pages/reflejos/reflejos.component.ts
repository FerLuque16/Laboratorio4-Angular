import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reflejos',
  templateUrl: './reflejos.component.html',
  styleUrls: ['./reflejos.component.css']
})
export class ReflejosComponent implements OnInit {

  startTime=new Date();
  endTime=new Date();
  iniciarPresionado=false;
  bgChangeStarted=false;
  maxWait=20;
  timerID!:any;

  multiplicadorRandom=0x015a4e35;
  randINCREMENT=1;
  today=new Date();
  randSeed=this.today.getSeconds();

  displayModal:boolean = false;
  modalMsj1:string = '';
  modalMsj2: string = '';

  cambiarBg:boolean = false;
  constructor(private ruteo: Router) { }

  ngOnInit(): void {
  }

  
  startTest()
  {
      // document.body.style.background=document.response.bgColorChange.options[
      // document.response.bgColorChange.selectedIndex].text;
      this.cambiarBg = true;
      this.bgChangeStarted=true;
      this.startTime=new Date();
  }

  remark(responseTime:number){
      var responseString="";
      if (responseTime < 0.20)
          responseString="Well done!";
      if (responseTime >= 0.30 && responseTime < 0.20)
          responseString="Nice!";
      if (responseTime >=0.40 && responseTime < 0.30)
          responseString="Could be better...";
      if (responseTime >=0.50 && responseTime < 0.60)
          responseString="Keep practicing!";
      if (responseTime >=0.60 && responseTime < 1)
          responseString="Have you been drinking?";
      if (responseTime >=1)
          responseString="Did you fall asleep?";
    
      return responseString;
  }

  stopTest(){
    if(this.bgChangeStarted)
    {
        this.endTime=new Date();
        var responseTime=(this.endTime.getTime()-this.startTime.getTime())/1000;

        // document.body.style.background="white";       
        // alert("Your response time is: " + responseTime + 
        //       " seconds " + "\n" + this.remark(responseTime));

        // alert(`Tu tiempo de respuesta es de : ${responseTime} segundos`);
        this.mostrarModal(`Tu tiempo de respuesta es de : ${responseTime} segundos`,'¿Desea jugar otra vez?')
        this.iniciarPresionado=false;
        this.bgChangeStarted=false;
        this.cambiarBg = false;
    }
    else
    {
        if (!this.iniciarPresionado)
        {
            alert("Presione iniciar primero");
        }
        else
        {       
            clearTimeout(this.timerID);
            this.iniciarPresionado=false;             
            alert("Presionaste antes!");
        }               
    }
  }

  randNumber(){
    this.randSeed = (this.multiplicadorRandom * this.randSeed + this.randINCREMENT) % (1 << 31);
    console.log(this.randSeed);
    return((this.randSeed >> 15) & 0x7fff) / 32767;
  }
  
  startit(){
    if(this.iniciarPresionado)
    {
        alert("Already started. Press stop to stop");
        return;
    }
    else
    {
        this.iniciarPresionado=true; 
        this.timerID=setTimeout(()=>{
          this.cambiarBg = true;
          this.bgChangeStarted=true;
          this.startTime=new Date();
        }, 6000*this.randNumber());
    }
  }

  terminarJuego(){
    this.ruteo.navigateByUrl('/juegos')
  }
  reiniciar(){
    this.displayModal = false;
  }

  mostrarModal(msj1:string,msj2:string){
    this.displayModal=true;
    this.modalMsj1 = msj1;
    this.modalMsj2 = msj2;
  }

}
