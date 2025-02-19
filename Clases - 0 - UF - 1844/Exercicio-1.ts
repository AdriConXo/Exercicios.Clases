//Exercicio 1
/**
 * Crea unha clase que conteña as seguintes propiedades:
 * nome
 * apelido1
 * apelido2
 * email
 * data de nacemento
 * Crea Un método o cal utilizarás para sacra os datos introducidos na instancia pola consola
 */

class DatosPersoais {
    nome: string;
    apelido1: string;
    apelido2: string;
    email: string;
    dataNacemento: number;

    constructor (nome: string, apelido1: string, apelido2: string, email: string, dataNacemento: number){
       
        this.nome = nome;
        this.apelido1 = apelido1;
        this.apelido2 = apelido2;
        this.email = email;
        this.dataNacemento = dataNacemento;
    }
    //Método
    mostrarDatos(): void {
        console.log(`Nome: ${this.nome}`)
        console.log(`Apelidos: ${this.apelido1} ${this.apelido2}`);
        console.log(`Email: ${this.email}`);
        console.log(`Data de nacemento: ${this.dataNacemento}`);
    }

}   
let persona1 = new DatosPersoais("Adrián", "Puente","Cordido", "adri82cx@gmail.com", 1982)
persona1.mostrarDatos();

