import { Owner } from "./owner";
import { Person } from "./person"


// el tipo date se instancia
const javier = new Person ("javier", 23, new Date(2000, 10, 9));
//(2000, 10, 9) es el año, mes(0 ej 01 = enero) y dia ? opcional 

javier.getNombre();
javier.saludar();

//al estar en public se puede reasignar
javier.name= "pepe";
console.log(javier.name);
javier.saludar();

const pedro = new Owner ("pedro", 23, new Date(2004, 10, 9), "max");
console.log(pedro);
pedro.mostrarInfo();