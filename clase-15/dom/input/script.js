document.addEventListener("DOMContentLoaded", function () {
    //capturamos los elementos de html
    const textoInput = document.querySelector("#textoInput");
    const colorInput = document.querySelector("#colorInput");
    const fontSizeInput = document.querySelector("#fontSizeInput");
    const resultado= document.querySelector("#resultado");


    //crear funciones
    function actualizartexto() {
    const texto = textoInput.value;
    resultado.textContent = texto;
    }
 
    function actualizarColor() {
    const color = colorInput.value;
    resultado.style.color  = color;
 }
    
    
    function actualizarFontSize() {
    const fontSize = `${fontSizeInput.value}px`; //px tiene que estar pegado si no el codigo no funciona lptm
    resultado.style.fontSize = fontSize;
 }


 //eventos
 textoInput.addEventListener("input", actualizartexto);
 colorInput.addEventListener("input", actualizarColor);
 fontSizeInput.addEventListener("input", actualizarFontSize);

});