//array de frutas
const fruits = ["apple", "banana", "cherry", "pear", "strawberry"];

//puedo acceder a n elementos del array
fruits[0];

//destructuracion de un array
//el mismo orden en que se estructura, es el mismo orden en de los elementos
//por lo tanto las constantes y los indices del array coinciden
const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit); //apple
console.log(secondFruit); //banana
console.log(thirdFruit); //cherry


//destructuracion de un objeto
// {clave:valor}

const persona ={
    nombre: "miguel",
    apellido: "lopez",
    edad: 20,
    profesion: "estudiante",
    direccion :{
        calle: "calle 1",
        numero: "123",
    }
};

//en este caso destructuramos a partir de la key que queremos del objeto
const{edad} = persona;

console.log(edad);

//podemos renombrar las variables durante la destructuracion
//lo que hace es que el nombre me lo guarda en nombreCompleto y profesion en trabajo haciendo que no colapse el codigo .
const {nombre:nombreCompetlo,apellido, profesion:trabajo} = persona;
console.log(trabajo);
console.log(nombreCompetlo);

//podemos mezclar (concatenar) los nombres de las variables
const fullname = `${nombreCompetlo} ${apellido}`;
console.log(fullname)

//destruturacion un objeto anidado (un objeto dentro de un objeto)
const {direccion:{calle,numero}} = persona;
console.log(calle,numero); 



//extra:

//la estructuracion de un string sigue el orden de los indices al igual que un array.
const palabra = "hello world";
const [primeraLetra, segundaLetra, terceraLetra] = palabra;
console.log(primeraLetra, segundaLetra, terceraLetra);