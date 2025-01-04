 let fruta = "manzana";
 
 
 //definir una array los valores de sus indice
 
 
 let lista = ["utn", "javascript", true, 22, [1, 2, 3, 4], fruta];


 //lee el indice 0 de la array
 console.log(lista[0]);


 //lee la array interna de la array (osea el contenido que se encuentra dentro)
 console.log(lista[4] [2]);

//cuando salgo del alcance del indice nos da como resultado "undefined" (osea que no cuenta con una definicion)
 console.log(lista[10]);



 console.log("largo:", lista.length);
 
//en caso de no tener nada a dentro [] es un valor llamado -> truthy
 let frutas = ["manzana", "pera", "sandia", "platano"];

 // si frutas exsiste, entonces mostrame el largo.
 if(frutas.length!==0){
    console.log("frutas:", frutas.length);
}
else{ console.log("no existe")}

//si tenes una condicion que revisa la existencia de una array y este  llega  vacio la condicion es valida. Por ello manejamos una condicion para que nos de mejor el valor (">o" o "!== 0")

var frutos = ["a"];

if(frutos.length>0){
    console.log("frutos:", frutos.length);
}

var mandarina = "mandarina";

//los strings tambien tiene length, ya que son cadenas de caracteres
console.log("string=", mandarina.length)

//caso de uso contraseñas

var contraseña = "rac"

if (contraseña.length >6 && contraseña.length <15) {
console.log("contraseña valida");
} else{
    console.log("contraseña invalida, minimo 6 caracteres y un maximo de 15");
}

//FUNCIONES NATIVAS
//PUSH

// cuando se anota los datos dentro del codigo se llama hardcode (lo especifico porque no siempre se puede hacer)

// push - añade un elemento o mas; al final del array y retorna el largo

let autos = ["rento"];
console.log("cantidad de autos:",autos);
autos.push("lamborguini");
console.log("autos añadidos al final de la lista:",autos.push());
console.log(autos);

//push se puede usar en un listado, carrito (para añadir algo) se puede convinar con form



//pop - elimina el ultimo valor de una array y lo retorna.

console.log("elemento final eliminado:", autos.pop());
  console.log(autos);

  //pop se puede usar en un listado, carrito (para eliminar el ultimo elemento) se puede convinar con form

//limpia la array de elementos (1x1) (se puede)


//__________________________

//SPLICE -elimina un valor o un intervalo de valores  (donde quieras, no importa posicion)

console.log("autos eliminados:", autos.splice(2, autos.length));

//las variables tambien se pueden usar ya que funciona como numeros.

//parametros star- donde empieza /deletecount - cuantos borra
// el primer valor del parentesis es de donde voy a comenzar del indice, el segundo valor la cantidad de valores que v oy a borrar en este caso comienzo en el indice 2 y borro 1 elemento
console.log(autos);


//ushift :inserta elementos al inicio del array, retorna un nuevo listado

console.log("autos al inicio añadido:",autos.unshift("alfa romeo","BMW","pagani"));

console.log(autos);

//shift - elimina el elemento que se encuentra al inicio del array, retorna los elementos eliminados

console.log("elemento inicial eliminado:",autos.shift());

console.log(autos);


//indexof -//retorna la posicion del indice del elemento (en este caso sale 2), en caso de no estar presente nos retorna -1, el segundo valor que indico es desde que valor quiero comenzar a buscar en el indice para ahorrar tiempo, en este caso elegi el 2do valor.




console.log("posicion del elemento:", autos.indexOf("lamborguini", 2));

console.log(autos[3])

//-1 -> truthy (contiene una carga buleana)
//par saber que elementos contienen una carga buleana se le manda a un if

let test =-1 //truthy

if(test){
    console.log( "no hay elementos"   )
}

// inedof sirve para saber que tengo dentro de una array putual para poder llegar al dato
// ej

let rento = autos.indexOf ("rento");
console.log(rento);

console.log(autos[rento]);