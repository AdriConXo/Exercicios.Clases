/**
* Exercicio 2
* 	Crea unha nova clase, crea varios métodos:
Un deles terá que devolver a suma de dous números.
Outro, deberás utilizar unha variable de entrada (non no constructor) a ese método e visualizala por consola nese método.
Outro, utilizando o constructor, introduce unha variable de entrada a cal, deberás devolvela noutro método.
Utilizando a instancia á clase, saca por consola o texto ou número introducido
*/

class NovaClase {
    num1: number;
    num2: number;

    constructor (num1: number, num2: number){
        this.num1 = num1;
        this.num2 = num2;
    }

//Método para devolver la suma de dos nímeros
sumar(): number {
    return this.num1 + this.num2;
    }

 // Método que toma un número de entrada y lo muestra por consola
 mostrarNumero(numero: number): void {
    console.log(`Número pasado polo método: ${numero}`);
    }

 // Método que devuelve el valor del primer número introducido en el constructor
 obtenerNum1(): number {
    return this.num1;
    }

 // Método que devuelve el valor del segundo número introducido en el constructor
 obtenerNum2(): number {
    return this.num2;
   }
}

let operacion = new NovaClase (10,5);
//Suma de los dos números
console.log (`Suma: ${operacion.sumar()}`);
//Mostrar el número pasado por el metodo
operacion.mostrarNumero(7);
//Mostrar el primer y el degundo número
console.log(`Primer número: ${operacion.obtenerNum1()}`);
console.log(`Segundo número: ${operacion.obtenerNum2()}`);
