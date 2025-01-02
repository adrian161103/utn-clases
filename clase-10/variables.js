// tipos de variables
//var : se puede reasignar el mismo contenedor /redeclarar
var variable;  //forma muy flexible
variable ="pedro";
console.log(variable);

variable ="juan";
console.log(variable);

variable =10;
console.log(variable); //manda informacion a la consola (se usa mucho, es una funcion)


var variable= 1000;

//el contenedor puede cambiar su valor en la ejecucion del programa 

//las variables pueden ser reasignadad

//let (otro tipo de variable) no se puede redeclarar pero si reasignar valor

let variable2;

variable2= "mono";
variable2= "jaula";
variable2= 2;

//const (otro tipo de variable) no se puede redeclarar y tampoco reasignar valor 

const variable3= "zapatilla";



//se usa para algo que no quiero que cambie 
//ej datos de persona (dni, fecha de nacimiento)
console.log(variable3)


//global
var x=100;
console.log(x);

//scope de var (alcance, alcance entre archivos)
//implementacion-definicion de funcion
function varScope() {
    //cree una variable llamada "x"
     x = 10;
    //cree una condicion con if (if es lo que debe pasar si adentro es verdadero)
    if(true) {
        //dentro de las llaves tenemos los bloques de codigo que definen los comportamientos cuando la condicion se cumple
         x = 20;
        console.log(x);
    }
    console.log(x);
}



//lamado de funcion o ejecucion

varScope()

//block-scope esta dentro de un contexto (un bloque)
//global-scope cuando esta dentro del archivo pero suelto, osea no esta dentro de un bloque




//scope de let
//te genera diferentes variables locales con diferentes valores e identidad

let y =100;
console.log(y);

function letScope() {
    let y=1;
    if (true) {
        let y =2;
        console.log(y);
    }
    console.log(y);
}

letScope()


//scope const genera variables locales y globales. no redefine ni reasigna
const z=200;
console.log(z);

function constscope() {
    const z = 4;
    if (true) {
        const z= 9;
        console.log(z);
    }
    console.log(z);
}

constscope()