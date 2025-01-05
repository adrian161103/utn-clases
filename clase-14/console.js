//para darle los valores a multiplicar en la consola

//funcion par calcular la multiplicacion js
function tablamult(num) {
    let tabla = [];
    for (let i = 1; i <= 10; i++) {
    tabla.push (num * i);
    console.log(`${i} x ${num} es ${i *num}`)
    }
    console.log("por fuera", tabla);
}


//catura los argumnentos de la linea de comandos (process.argv)

const args = process.argv.slice(2);

if (args.length > 0) {
    const num = parseInt(args[0], 10);
    if (!isNaN(num)){
        tablamult(num);
    } else {
        console.log("por favor, proporciona un numero valido como argumento.")
    }
    } else { 
        console.log("por favor, proporciona un numero como argumento.")
    } 