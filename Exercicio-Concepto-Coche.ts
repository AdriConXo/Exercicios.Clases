/**
 * Requírese un programa que modele o concepto de coche.

- Marca: o nome do fabricante.
- Modelo: ano de fabricación.
- Motor: volume en litros da cilindrada do motor dun coche.
- Tipo de combustible: valor indicado cos posibles valores de gasolina, bioetanol, gasóleo, biodiesel, gas natural. (use un tipo de variable ENUM)
- Número de portas: número de portas
- Velocidade actual: velocidade do vehículo nun momento determinado
- Velocidade máxima: velocidade máxima sostida polo vehículo en km/h

## A clase debe incluír os seguintes métodos
 Un construtor para a clase Car onde os valores dos seus atributos se pasan como parámetros
 Métodos para acelerar a unha determinada velocidade, desacelerar e frear (axustar a velocidade actual a cero).
 Método para mostrar os valores dos atributos dun coche na pantalla.



Establece a súa velocidade actual en 100 km/h, aumenta a súa velocidade en 20 km/h, diminúe a túa velocidade en 50 km/h e despois frea. Con cada cambio de velocidade, a velocidade actual debería mostrarse na pantalla.

- Con cada cambio de velocidad, se debe mostrar en pantalla la velocidad actual.
- Con cada cambio de marcha, a velocidade actual debería mostrarse na pantalla.
 */
 enum TipoCombustible {
    gasolina = "Gasolina",
    bioetanol = "Bioetanol",
    gasoleo = "Gasóleo",
    biodiesel = "Biodiésel",
    gas_natural = "Gas Natural"
 }

 class car {
    marca: string;
    modelo: string
    anoFabricacion: number;
    cilindrada: number;
    tipoCombustible: TipoCombustible;
    numPortas: number;
    velocidadeActual: number;
    velocidadeMaxima: number;

    constructor (
        marca: string,
        modelo: string,
        anoFabricacion: number,
        cilindrada: number,
        tipoCombustible: TipoCombustible,
        numPortas: number,
        velocidadeActual: number,
        velocidadeMaxima: number,
    ){
        this.marca = marca;
        this.modelo = modelo;
        this.anoFabricacion = anoFabricacion;
        this.cilindrada = cilindrada;
        this.tipoCombustible = tipoCombustible;
        this.numPortas = numPortas;
        this.velocidadeActual = velocidadeActual;
        this.velocidadeMaxima = velocidadeMaxima;
    }
// Método aceñleración 
acelerar (incremento: number): void {
    this.velocidadeActual += incremento;
    if (this.velocidadeActual > this.velocidadeMaxima){
        this.velocidadeActual = this.velocidadeMaxima;
    }
    console.log(`Velocidade actual: ${this.velocidadeActual} km/h`);
    }

//Método para desacelerar
desacelerar (decremento: number): void {
    this.velocidadeActual -= decremento;
    if ( this.velocidadeActual < 0) {
        this.velocidadeActual = 0;
      }
      console.log (`Velocidade actual: ${this.velocidadeActual}km/h`)
    }

//Método para frear
frear(): void {
    this.velocidadeActual = 0;
    console.log("Freou. Velocidade actual: 0 km/h");
    }
    mostrarAtributos(): void {
        console.log (`Marca: ${this.marca}`);
        console.log (`Modelo: ${this.modelo}`)
        console.log (`Ano de fabricación: ${this.anoFabricacion}`);
        console.log (`A su cilindrada é: ${this.cilindrada}`);
        console.log (`Tipo de combustible: ${this.tipoCombustible}`);
        console.log (`Número de portas: ${this.numPortas}`);
        console.log (`Velocidade actual: ${this.velocidadeActual}`);
        console.log (`Velocidade máxima: ${this.velocidadeMaxima}`);
    }
     
 }
 let miCar = new car("Seat", "Ibiza", 2008, 1.9, TipoCombustible.gasoleo, 3, 150, 210);

 miCar.mostrarAtributos();
 miCar.acelerar(20);
 miCar.desacelerar(50);
 miCar.frear();
