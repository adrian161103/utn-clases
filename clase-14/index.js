//ejercicios

console.log("-------------------1-------------------------")

//1. acceder al tercer elemento de un array y saignarle un nuevo valor

//aca encontramos el 3er elemento
let frutas = ["manzana","pera", "frutilla", "uva"];
console.log(frutas[2])

//aca le asignamos un nuevo valor
frutas[2]= "banana"
console.log(frutas[2])

console.log("-------------------2-------------------------")

//2.agregar un nuevo elemento al final de un array

frutas.push("higo")
console.log(frutas)

console.log("-------------------3-------------------------")



//3. usar funcion nativa para duplicar todos los elementos de un array de numeros
//map
let numeros= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var doble=numeros.map(numero => numero*2);

console.log(doble);

//foreach
//iniciamos un array, donde guardaremos los resultados (los nuevos)
var doble= [];
// a diferencia del map este no genera un array con resultados y por eso necesitamos pushear
numeros.forEach(numero =>{
    doble.push(numero*2);
});
console.log(doble);

//for
var doble= [];
for (let i = 0; i < numeros.length; i++) {

    doble.push(numeros[i]*2);
}
console.log("con for",doble);


console.log("-------------------4-------------------------")
//4. usar funcion nativa para obtener los numeros pares de un array

let pares = numeros.filter(numero => numero %2 ===0)

console.log("pares",pares)

function buscapar(numeros) {
    let resultados = numeros.filter(numero=> numero %2 ===0);
    console.log("buscapar", resultados);
    return resultados;
}

buscapar(numeros);

//5. acceder al segundo y cuarto elemento de un array y combinarlos en una nueva codena (concatenación)

let combinados ="mis frutas favoritas son: " + frutas[1] + " y " + frutas[3] ;

console.log(combinados)

// aca se usa las``(basticks -- template string -- template literals) para que sea mas efectivo ${} sirve para activar las acciones
let combina2 = `mis frutas favoritas son: ${frutas[1]} y ${frutas[3]}`

console.log(combina2)


//6. usar funcion foreach para calcular la suma de todos los elementos de un array


//un array
//un resultado
//funcion

//inicializar un acumulador (en este caso me daba error porque no lo inicie con "0")
let resultado = 0;


// numeros.forEach(numero => (resultado = resultado + numero));

//mas usado en el rubro laboral
numeros.forEach(numero=> (resultado += numero));
console.log(resultado);


//7. escribir un script que devuelve la tabla de multiplicar del numero que el usuario teclee, con ciclo for. La salida debe ser un array de numeros.
console.log("----------------------7---------------")



function tablamult(num) {
    let tabla = [];
    for (let i = 1; i <= 10; i++) {
    tabla.push (num * i);
    console.log(`${i} x ${num} es ${i *num}`)
    }
    console.log("por fuera", tabla);
}


tablamult(3);