export class Operaciones {
    numero1: number = 0;
    numero2: number = 0;
    resultadoPromedio: number = 0;
    resultadoSuma: number = 0

    suma(){
        this.resultadoSuma = (parseInt(this.numero1.toString()) + parseInt(this.numero2.toString()));
    }
    promedio(){
        this.resultadoPromedio = (parseInt(this.numero1.toString()) + parseInt(this.numero2.toString())) / 2;
    }
}
