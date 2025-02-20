/**
 * 
Exercicio 3
Crea unha clase calculadora, onde deberás crear dúas variables privadas:
Crea diferentes métodos:
Suma
Resta
Multiplicación
División
Nun método ( que deberás crear ) o cal deberás introducir unha estructura ‘switch’ para seleccionar qué tipo de operación realizarás.
En ambos casos, cháma os métodos de maneira axeitada dende fora.

 */

class Calculadora {
    private num1: number;
    private num2: number;

    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }

//Métodos
    suma(): number {
        return this.num1 + this.num2;
    }

    resta(): number {
        return this.num1 - this.num2;
    }

    multiplicacion(): number {
        return this.num1 * this.num2;
    }

    division(): string {
        return this.num2 !== 0 ? (this.num1 / this.num2).toString() : "Error: División por 0";
    }

//Método seleccionar operación

   calcular(operacion: string): void {
    let resultado: string | number;
    switch (operacion) {
        case "suma":
            resultado = this.suma();
            break;
        case "resta":
            resultado = this.resta();
            break;
        case "multiplicacion":
            resultado = this.multiplicacion();
            break;
        case "division":
            resultado = this.division();
            break;
        default:
            resultado = "Operación no válida";
    }
    console.log(`Resultado de ${operacion}: ${resultado}`);

   }
}
let miCalculadora = new Calculadora(5,8);
miCalculadora.calcular("suma");
miCalculadora.calcular("resta");
miCalculadora.calcular("multiplicacion");
miCalculadora.calcular("division");
miCalculadora.calcular("otra");