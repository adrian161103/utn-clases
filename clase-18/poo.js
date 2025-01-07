//autos
//propiedades o atributos
//clave: valor
//key:value
//mi dato numero : ¿ es incrementable-disminuible?
// necesita o se piensa hacer una operacion matematica?

//para que año sea numerico tenemos que pensarlo en termino de negocio/ rubro
// ej: quiero ver los autos con 20 años de antiguedad o mas
//quiero los 5 autos mas viejos
//quiero los 5 autos mas nuevos
//solo en esos casos años estaria en nro y no string

let fiat = {
  marca: "fiat",
  modelo: "siena",
  año: "2005",
  km: 200000,
  color: "rojo",
  Motor: "1.6",
  combustible: "nafta",
  gnc: true,
  precio: 5000000,
};

let volkswagen = {
  marca: "volkswagen",
  modelo: "gol",
  año: "2013",
  km: 600000,
  color: "gris",
  Motor: "1.6",
  combustible: "nafta",
  gnc: false,
  precio: 8000000,
};

//por terminos practicos no es factible hacerlo asi si son muchos autos.

//forma facil "molde"

//this accede a cualquier parte de la class en este caso (puede ser de una fun o del bloque) y lo trae para poder proporcionar de manera manual sus valores
class auto {
  //constructor reune las propiedades iniciales que quiere del auto
  //dentro del constructor tenemos parametros para la creacion de la instancia
  constructor(marca, modelo, year, km, color, Motor, combustible, gnc, precio) {
    //inicializar las propiedades con sus valores.
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
    this.km = km;
    this.color = color;
    this.Motor = Motor;
    this.combustible = combustible;
    this.gnc = gnc;
    this.precio = precio;
  }
  //metodos
  arrancar() {
    console.log("el auto arranca");
  }

  acelerar() {
    console.log("run run");
  }
}

//instanciar

let golcito = new auto(
  "volkswagen",
  "gol",
  2008,
  60000,
  "negro",
  "1.6",
  "nafta",
  false,
  10000000
);

console.log(golcito);

golcito.arrancar();
golcito.acelerar();
//la ñ estorva XD, mejor escribirlo en ingles o de otra forma

//en la consola con el . podemos entrar a alguna propiedad o valor ej
console.log(golcito.km);
 
