/**
*Exercicio 1
Crea unha clase, dentro da mesma:
Crea un método/función ‘mostrarTextoPorConsola’:
Deberemos pasar un texto a través do constructor, é dicir, deberemo ter creado unha variable ( de clase ou estado ou instancia )
Dito método deberá escribilo texto insertado por consola.
Crea un método/función ‘mostrarNumeroPorConsola’, segue os mesmos pasos que o anterior, pero pasándolle un número.


Crea un método/función ‘sumaONumero’, inserta un número o cal deberás usalo para sumar neste método, é dicir, ‘this.numero + 5’ por exemplo. 
Visualiza dito número por consola, tal como temos feito nos exemplos vistos.

Lembra : 
Instanciala clase e pasarlle as variables
Crear unha variable para gardalo texto ou número no interior da clase (variable clase ou instancia …)
Executa o método onde se mostra o texto

*/

class OperacionsConTextoYNumeros {
    texto: string;
    numero: number;
    constructor(texto: string, numero: number) {
        this.texto = texto;
        this.numero = numero;
    }

//Método para mostrar texto por consola 
mostrarTextoPorConsola(): void {
    console.log (`Texto: ${this.texto}`);
    } 
//Método para mostrar número
mostrarNumeroPorConsola():void {
    console.log (`Numero:${this.numero}`)
    }
//Métdodo para sumar un número a "this.numero"
sumaONumero(numero: number): void {
    this.numero =this.numero + numero;
    console.log (`Número + ${numero}: ${this.numero}`)
    }
}
let exemplo = new OperacionsConTextoYNumeros("Aqui hay un texto", 25);

exemplo.mostrarTextoPorConsola();
exemplo.mostrarNumeroPorConsola();
exemplo.sumaONumero(5);