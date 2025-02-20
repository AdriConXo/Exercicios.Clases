/**
* Exercicio 2
* 	Crea unha nova clase, crea varios métodos:
Un deles terá que devolver a suma de dous números.
Outro, deberás utilizar unha variable de entrada (non no constructor) a ese método e visualizala por consola nese método.
Outro, utilizando o constructor, introduce unha variable de entrada a cal, deberás devolvela noutro método.
Utilizando a instancia á clase, saca por consola o texto ou número introducido
*/

class NovaClase {
   valorConstructor: number;

   constructor(valorConstructor: number) {
    this.valorConstructor = valorConstructor;
   }

   // Método para devolver la suma de dos números
   sumarNumeros(num1: number, num2: number): number {
    return num1 + num2;
   }

   // Método que toma un valor de entrada y lo muestra por consola
   mostraValor(valor: string): void {
    console.log(`Valor pasado al método: ${valor}`);
   }

   // Método que pasa el valor del constructor
   mostrarValorConstructor(): void {
    console.log(`Valor del constructor: ${this.valorConstructor}`);
   }
}


let nuevaInstancia = new NovaClase(10);

console.log(nuevaInstancia.sumarNumeros(5, 8)); 
nuevaInstancia.mostraValor("Texto"); 
nuevaInstancia.mostrarValorConstructor(); 
