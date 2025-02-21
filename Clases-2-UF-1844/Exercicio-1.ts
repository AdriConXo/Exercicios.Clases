/**
 * Exercicio 1
Crea unha clase con diferentes métodos:
Un dos métodos deberá conter un obxeto tipo este: 
Lembra que para acceder, por exemplo a “presencial”, deberemos utilizar o “.”, a medida que avanzamos entre os diferentes obxetos debemos utilizalo.
Se quero utilizar o obxeto definido previamente en calquer método interno da clase,¿cómo debo definilo?.
Crea o método de tal xeito que este visualice por consola os seus valores utilizando un blucle tipo ‘for … in’
 
*Crea un método que lea un array de obxetos,este array deberás introducilo dende fora, é dicir, este novo método terá unha variable de entrada.
Cómo farías para que esta variable a poda ler outro método?
Crea un método onde lea esta variable
Executa o método creado no paso anterior, onde visualices dito array 

*/
class Factura {
  producto = {
      numDias: 5,
      tipoClase: "presencial",
      asignatura: "programación"
  };
  mostrarProducto() {
    console.log("Detalles del producto:");
    for(let clave in this.producto) {
      console.log(`${clave}: ${this.producto[clave as keyof typeof this.producto]}`);
    }
  }
}
const miFactura = new Factura();
miFactura.mostrarProducto();

