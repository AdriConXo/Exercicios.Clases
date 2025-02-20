/**
 * Exercicio 2

Vas crear unha clase de concatenar texto, para iso, crea dúas propiedades:

Texto_1
Texto_2
Inicialízalas dende o constructor mediante a instancia.

Crea un método onde crearás a concatenación e sacarás o texto por consola.
Instancia a clase e utiliza o método creado.

 */

class ConcatenarTexto {
    texto_1: string;
    texto_2: string;

    constructor(texto_1:string, texto_2: string){
        this.texto_1 = texto_1;
        this.texto_2 = texto_2;
     }
//Método
     concatenarEImprimir(): void {
        let resultado = this.texto_1+ " "+this.texto_2;
        console.log(`Texto concatenado: ${resultado}`);
     }
}
//Instancia
let dosTextos = new ConcatenarTexto("Hola", "Mundo!!");
dosTextos.concatenarEImprimir();