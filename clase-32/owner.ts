
//creamos subclase

import { Person } from "./person";

//con extends heredamos lo mismo del padre y podemos añadir  atributos/metodos nuevos, si queremos
//todo el contenido de la superclase se herda aunque no este visible
export class Owner extends Person {
    public mascota:string;
    constructor(name: string, age: number, fechaNac: Date, mascota: string) {
        //con super traemos los metodos y atributos del padre
        super(name, age, fechaNac);
        this.mascota = mascota;
    }
    public mostrarInfo(): void {
        console.log(`el dueño es ${this.getNombre()} y su mascota es ${this.mascota}`);
}
}
