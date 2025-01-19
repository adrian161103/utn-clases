//creamos la clase persona
export class Person {
   public name: string;
   private age: number;
   private fechaNac: Date;
    //creamos el constructor
    //el constructor permite guardar los parametros en los valores internos del objeto
    constructor(name: string, age: number, fechaNac: Date) {
        this.name = name;
        this.age = age;
        this.fechaNac = fechaNac;
    }

    //creamos los metodos
    // "void" significa que no devuelve ningun valor, es el tipo de retorno
    saludar(): string {
        console.log(`¡Hola ${this.name}!`);
        return `¡Hola ${this.name}!`;
    }

    public getNombre(): string {
        console.log(this.name);

        return this.name;
    }
    //podes usar retorno doble : string | undefined 
public setNombre(nuevoNombre: string): string  {
    //validacion para quitar espacion y no recibir un string vacio
    //.trim() remueve espacion adelante y atras del string
    if(nuevoNombre.trim().length > 0){
      return  (this.name = nuevoNombre);
    } else {
        console.log("el nombre esta vacio");
        return "Nombre no valido";
    }
}
}