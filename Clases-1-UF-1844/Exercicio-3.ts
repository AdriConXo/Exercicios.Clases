/**
* Exercicio 3
* Aquí vamos seguir traballando co concepto de instancia.
Un exemplo moi clasico en clases, é crear unha clase ‘Coche’. Polo que:
Crea as seguintes variables de clase ou de estado:
marca, modelo, numPortas
Introduce na clase creada, os valores ‘marca’, ‘modelo’ e ‘numPortas’
Crea un método onde deberás sacar por consola ditos datos introducidos, ca seguinte mensaxe:
“O coche é un modelo … marca … e ten … portas”
*/

class Coche {
   marca: string;
   modelo: string;
   numPortas: number;
   
   constructor(marca:string, modelo:string, numPortas: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.numPortas = numPortas;
   }
   //Método para mostrar datos del coche
   mostrarInfoCoche(): void {
    console.log (`O coche é un modelo ${this.modelo} marca ${this,this.marca} e ten ${this.numPortas} portas.`);
   }
}
let miCoche = new Coche ("Seat", "León", 5);
miCoche.mostrarInfoCoche();

/**
 * Na seguinte imaxe, aparecen dúas novas funcións que están iniciadas coa palabra set e get. 
Lembras para que se usan?  
Get es un método que obtiene y accede al valor de una propiedad privada 
y el "set" es otro método  que le permite modificar el valor a una propiedad
Saberías utilizar e crear na clase que tes esas funcións de tal xeito que utilices eses conceptos?
*/
class Coche2 {
    private marca: string;
    private modelo: string;
    private numPortas: number;

    constructor(marca: string, modelo: string, numPortas: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.numPortas = numPortas;
    }

   
    get getMarca(): string {
        return this.marca;
    }

    
    set setMarca(marca: string) {
        this.marca = marca;
    }

    
    get getModelo(): string {
        return this.modelo;
    }

    
    set setModelo(modelo: string) {
        this.modelo = modelo;
    }

    
    get getNumPortas(): number {
        return this.numPortas;
    }

    
    set setNumPortas(numPortas: number) {
        this.numPortas = numPortas;
    }

    
    mostrarInfoCoche2(): void {
        console.log(`O coche actualizado é un modelo ${this.modelo} marca ${this.marca} e ten ${this.numPortas} portas`);
    }
}


let miCoche2 = new Coche2("Seat", "León", 5);


// Cambio los valores usando el set
miCoche2.setMarca = "Seat";  
miCoche2.setModelo = "Ibiza";  
miCoche2.setNumPortas = 3;     

miCoche2.mostrarInfoCoche2();
