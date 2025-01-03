//para armar una condicion se necesita if en js

//if significa si pero es un si de una condicion estricta (lo que dice adentro se tiene que cumplir)
                        //OPERADORES LOGICOS
let llueve=false;
let barrio=true;
let club=true;
let escuela=false;

// !llueve and (los del barrio and (los del club or los de la escuela))

if (!llueve && (barrio && (club || escuela))) {
    console.log("se hace el cumple");
//! funciona como un *-1
}
//else significa si, no (se usa para dar otra ruta de informacion)
else{
    console.log("no hay fiesta");
}


//tenemos la condicion ideal
if (!llueve && (barrio && (club || escuela))) {
    console.log("la fiesta se hace en una cancha");
 }
 //condicion alternativa
 else if (llueve && barrio && (club || escuela)) {
    console.log("la fiesta se hace en mi casa")
 } 
 // si el resto falla, esta condicion se cumple
 else {
    console.log("no hay fiesta");
 }



           //OPERADORES DE COMPARACION

//  Igual a (==) Solo compara el valor 
//no confundir con el "=" porque este sirve para asignar valores
//solo se compara el valor como los dos son "2" sin importar que uno sea numerico y el otro string da true

console.log(2 == "2");

//comparacion estricta - Igual a (===) Compara valor y tipo de valor.
//como compara valores y tipo de valor y uno ser string y el otro nro da false

console.log(2 === "2");


//  Distinto a (!=) Solo compara valor
//da flase porque los dos son iguales sin importar el tipo de valor
console.log(2 != "2");


//  Distinto a (!==) Compara valor y tipo.
//solo se compara el valor como los dos son "2" sin importar que uno sea numerico y el otro string da true
console.log(2 !== "2");

//  Mayor a (>) // Menor a (<) 

console.log(2 < "5");
 //inclue el 4, 3 ,2 1,0

//  Mayor o igual a (>=) // Menor o igual a (<=)

console.log(2 >= "2");
console.log(2<=5)
 //inclue el 5, 4, 3 ,2 1,0




let num = 9;

//if añidado o añado puedo agregar una condicion
// typeof num === "number" se llama validacion y se relaciona con el tipo de valor.
if(typeof num === "number"){

    if (num >= 5) {
    console.log("num es mayor o igual a 5")
    } else {
        console.log("num es menor a 5")
    }  
}
else {
    console.log("ingrese un dato numerico")
}

// otra forma mas corta pero no tan recomendada

if(typeof num === "number" && num >=5)
    {console.log("num es mayor o igual a 5")
} else {
    console.log("num es menor a 5")
}  


//IF TERNARIO
// codicion ? si se cumple : bloque si se cumple else
typeof num === "number" && num >=5 
 ? console.log("num es mayor o igual a 5")
 :  console.log("num es menor a 5")


 //switch evalua las expresiones (casos) y compara el valor correspondiente con los demas para ver cual coincide una forma de if

 let dia=11

 switch (dia) {
    case 1:
        console.log("hoy es lunes")
        break;

    case 2:
         console.log("hoy es martes")
        break;

    case 3:
         console.log("hoy es miercoles")
        break;

    case 4:
        console.log("hoy es jueves")
         break;

    case 5:
        console.log("hoy es viernes")
        break;

    case 6:
        console.log("hoy es sabado")
        break;

    case 7:
        console.log("hoy es domingo")
        break;
        
    default:
        console.log("numero de dia incorrecto")
        break;
 }