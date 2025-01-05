// genero una funcion que maneja otra funcion //addEventListener significa añadir escucha de eventos

//DOMContentLoaded comienza a funcionar a partir del contenido que se cargue en el dom (necesita procesos)

document.addEventListener("DOMContentLoaded", function () {
    //traer elementos con selectores
 const titulo =document.querySelector(".titulo");
 const parrafo = document.querySelector(".texto");
 const input = document.querySelector(".input-texto");

    //definir funciones que modifican clases de los elementos

 function agregarBOld() {
     parrafo.classList.add("black");
    }

 function quitarBold() {
    parrafo.classList.remove("black");
        
    }


 titulo.addEventListener("click",()=>{
    //togle seria un prendido apago "interruptor" sirve en cliks
    titulo.classList.toggle("red")  
 })


 function actualizartexto() {
    //textcontent te trae solo el texto
    parrafo.textContent = input.value;
    //value sirve para obtener el valor de cualquier input
 }

 // Escuchamos eventos y aplicamos los estilos

 //callkback
 parrafo.addEventListener("mouseover", agregarBOld);
 parrafo.addEventListener("mouseout", quitarBold);
 input.addEventListener("input", actualizartexto)


    
});