//funciones


//funcionm nombrada - sirve para poder dar caracteristicas de la funcion (en este caso que es una suma)


//aca la funcion de declara
function suma(a, b) {
    return a + b;
}

//aca la funcion se utiliza (llamado y uso)
console.log(suma(2, 4));


//return /retorno - genera la salida de datos de la funcion
//solo hay un return por bloque de codigo.

//return finalzia la operacion. 

let resultadosuma = suma (2, 4)


// en la consola se le puede agrgar mas datos a la operacion
console.log(resultadosuma +50)


//funcion anonima 
//funcion que no tiene nombre (participa una variable que si tiene nombre)

let resta = function (a, b) {
   return a- b;
};
console.log(resta(6, 4))


 //funcion flecha (2 formas)

//version 1- sin nombre, no tiene function, no lleva llaves, no tiene return(no lleva) ya que la flecha cumple la funcion

const multiplicar = (a,b) => a * b;
console.log(multiplicar(6, 5))


//version 2- sin nombre, sin function, lleva llaves y return

const division = (a, b) => {
    return a / b};
    console.log(division(12, 2))