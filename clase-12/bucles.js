
let array = ["fiat", "volkvawen","renot", "colum", "mercedes", "volvo", "chebrolet", "honda","gol"];



// index(puede cambiar el nombre)   "++" para incremento "--" para decremento


// let index = 0 ->valor inicial; mientras indicea sea menor al largo del array; incrementa 1

//condicion ->index < array.length (mientras mi valor incial sea menor al largo del array, se ejecuta)

//index++ -> incremento (en cada vuelta, se cuenta una vez mas e incrementando el valor)

// {const element = array[index];}
//{} llaves del bloque de codigo
//const element = array[index] ->bloque de codigo (no hay limite de opciones) el bloque asigna

// array[index] la primera vuelta vale 0, la segunda 2, ...


for (let index = 0; index < array.length; index ++) {
    const element = array[index];
    console.log( "caso 1", {element, index})
}


console.log("---------------------------------------")


//se le resta 1 al largo ya que length es el indice+1
//valor inicial: el largo del array-1; mientras el indice sea >= a 0;decrece 1
for (let index = array.length -1; index >= 0; index--) {
    const element = array[index];
    
    console.log( "caso 2", {element, index})
    
}

//for: por tanta cantidad de veces



//+= o -= sirve para poder dar diferentes valores ej +=2 (va de 2 en 2)


//while seria mientras while sirve para bucles

let numero=0;
while (numero <= 20) {
    console.log(numero++);

}

//------------------------------------------------
console.log("-------------------------------------")

//foreach - por cada elemento

let mascotas = ["lagartija", "cobra", "cabra", "perro", "gato", "mapache", "zorro", "gallina", "rinoseronte",]


//funcion flecha: parametro - => (funcion) - consola (bloque de codigo)

mascotas.forEach(mascota => console.log(mascota));

// funcion normal: funcion- (parametro) - [consola]
console.log("---------------OTRA FORMA----------------------")

mascotas.forEach(function (mascota){
console.log(mascota)
}); 



console.log("-----------------MAP--------------------")
//map: ejecuta una funcion por cada item y su salida es un array nuevo modificado
//map similar a foreach pero mas nuevo; es un array modificado

let numeros= [1, 2, 3, 4, 5]

let resultados = numeros.map(function (numero){
    return numero * 2;
});

console.log(resultados);

console.log("--------otra forma------")

function triple(num){
    return num * 3;
}

//funcion flecha con llamado de funcion como parametro (callback, "triple")

let resultadotriple = numeros.map(numero=> triple(numero));
console.log(resultadotriple);


console.log("-------------filter-------------")


//filter: o filtro- muestra toda las coincidencias segun condicion

numerosrandom= [1, 2, 3, 4 ,5 ,6,7 ,8 ,9 ,10 ,22 ,23 ,44 ,57 ,43 ,11 ,94];

//filtra numeros pares
numpares=numerosrandom.filter(num => num % 2 ===0);

// % es modulo (te indica si el valor final tiene resto )

console.log(numpares);

//filtra numeros impares
numimpares=numerosrandom.filter(num => num % 2 !==0);

console.log("-----dividido(divide lo que sale en el primer log del filter)-------")
//sirve tambien para dividir

//realiza resultados
let divididos =numpares.map (num=> num /2);
console.log(divididos);

//buscar numeros mayores o menores a algo

console.log( "mayor a 15", numerosrandom.filter(num =>num > 15));


//tambien se puede filtra el largo de los caracteres de las mascotas en este caso mayor a 6
console.log (mascotas.filter(mascota => mascota.length >6));


//filtra todos los elementos que sean gallina, genera un array con el resultado


console.log(mascotas.filter(mascota =>mascota === "gallina"));
//sirve mas si tiene mas datos como por ej dueño, razo, edad, nombnre, color, etc asi es mas estricta la informacion

//filter y map desventaja por volumen de datos (ya que lo busca de manera secuencial dato x dato y si cada array tiene subdatos tambien los revisa)


//FIND -trae el primer resultado que coincide con condicion 0



//va a encontra la primera coincidencia que sea "gallina"
console.log(mascotas.find(mascota =>mascota === "gallina"));

let numparesF=numerosrandom.find(num => num % 2 ===0);
console.log(numparesF);

//find es mas rapido que filter ya que solo busca el primer resultado que coincide con la cond