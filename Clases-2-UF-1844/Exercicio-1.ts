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
    // Declarar 'producto' correctamente sin valores iniciales
    private producto: {
      numDias: number;
      tipoClase: string;
      asignatura: string;
    };
    
    // Puedes agregar un constructor si quieres inicializar valores dentro de la clase
    constructor() {
      // Inicialización de 'producto'
      this.producto = {
        numDias: 0, // Se puede dejar 0 o cualquier otro valor por defecto
        tipoClase: "",
        asignatura: ""
      };
    }
  }
  
    
