// alert("Hola mundo!") ---  sale una alerta- comentario arriba de todo
// prompt("dime tu nombre") --- sale un formulario arriba de todo


let elementoh1 = document.querySelector("h1");  //en el html busca la coincidencia y me lo trae (funciona como el find trae el primero que encuentre)

console.log(elementoh1)


let elementoh1v2 = document.querySelectorAll("h1");  
console.log(elementoh1v2);
//nos devuelve una nodelist

//por foreach ya que en la consola web no me permite map para que nos devuelva todos los h1 que encuentre

function nodelist () {
    elementoh1v2.forEach(elemento => {
        console.log ( elemento.innerHTML)
    });
}
nodelist();

//elemento.innerHTML describe los elementos que tiene los descendientes del html


//con el queryselector podemos traer tanto como una clase, id

//queryselector es generico, permite clases, ids y tags


//clases
//como es el generico le tengo que indicar que es la class con el "."
document.querySelector(".MIclase-dom")

//como es especifico para clases tengo que nombrar cual es la clase añadiendo a esto como clase se puede reutilizar te retorna todas las clases.
document.getElementsByClassName("MIclase-dom")


//id
//como es el generico le tengo que indicar que es el id con el "#"
document.querySelector("#subtitulo-dom")

//como es especifico para id tengo que nombrar cual es el id
document.getElementById("subtitulo-dom")

//tags

document.querySelector("div")
document.getElementsByTagName("div")


//podemos manejar el dom con situaciones que se presente.
//podemos modificarlo, desaparecer,traer datos, etc trabajar .
//ej traer un id de un boton y darle comportamiento atravez de javascript.



let titulo = document.querySelector("h1")

titulo.style.color = "red"

titulo.style.opacity = 0.5 


// let parrafo = document.querySelector (`a`);

// parrafo.style.fontSize = "60px";

const hovertarget = document.querySelector(".hover-target");
const initialstyle = document.querySelector(".initial-style");



//aca egrego eventos para dar mejores estilos al html son eventos.
hovertarget.addEventListener("mouseenter", () =>{
    initialstyle.style.color = "white";
    initialstyle.style.backgroundColor = "black";
    initialstyle.style.fontSize = "24px";
    initialstyle.style.fontWeight = "bold";
    initialstyle.style.padding = "10px";
    initialstyle.style.borderRadius = "5px";
    initialstyle.style.transform = "scale(1.1)";
});



hovertarget.addEventListener("mouseleave", () =>{
    initialstyle.style.color = "";
    initialstyle.style.backgroundColor = "";
    initialstyle.style.fontSize = "";
    initialstyle.style.fontWeight = "";
    initialstyle.style.padding = "";
    initialstyle.style.borderRadius = "";
    initialstyle.style.transform = "";
});



//innertex sirve para acceder al contenido del texto de nodo sin htm, trae todo (clase estilos etc)
//textcontent te trae solo el texto