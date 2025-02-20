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

    // Getter para obtener la marca
    get getMarca(): string {
        return this.marca;
    }

    // Setter para cambiar la marca
    set setMarca(marca: string) {
        this.marca = marca;
    }

    // Getter para obtener el modelo
    get getModelo(): string {
        return this.modelo;
    }

    // Setter para cambiar el modelo
    set setModelo(modelo: string) {
        this.modelo = modelo;
    }

    // Getter para obtener el número de puertas
    get getNumPortas(): number {
        return this.numPortas;
    }

    // Setter para cambiar el número de puertas
    set setNumPortas(numPortas: number) {
        this.numPortas = numPortas;
    }

    // Método para mostrar la información del coche
    mostrarInfoCoche2(): void {
        console.log(`O coche actualizado é un modelo ${this.modelo} marca ${this.marca} e ten ${this.numPortas} portas`);
    }
}

// Crear una instancia de la clase Coche2
let miCoche2 = new Coche2("Seat", "León", 5);


// Cambiar valores usando los setters
miCoche2.setMarca = "Toyota";  
miCoche2.setModelo = "Auris";  
miCoche2.setNumPortas = 4;     

miCoche2.mostrarInfoCoche2();
