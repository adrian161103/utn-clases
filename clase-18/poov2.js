class auto {
  //constructor reune las propiedades iniciales que quiere del auto
  //dentro del constructor tenemos parametros para la creacion de la instancia

  //encendido es otra propiedad, aunmque se define por defecto y no por parametro
  encendido = false;
  velocidad = 0;
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
  encenderApagar() {
    if (this.encendido === false) {
      console.log("el auto esta encendido");
      return (this.encendido = true);
    } else {
      console.log("el auto esta apagado");
      return (this.encendido = false);
    }
  }
  cambiarColor(color) {
    this.color = color;
    console.log(`el auto a cambiado de color ${color}`);
    return this.color;
  }
  acelerar(arranque) {
    if (this.encendido === true) {
      this.velocidad = Number(arranque) + this.velocidad;
      // this.velocidad += Number(arranque) ;
      console.log(
        `el auto aumento su velocidad en ${arranque} va a ${this.velocidad}km/h`
      );
    } else {
      this.encenderApagar();
      this.velocidad = Number(arranque) + this.velocidad;
      
      console.log(`el auto aumento su velocidad en ${arranque} va a ${this.velocidad}km/h`)
    }
  }
  frenar(desacelerar) {
    if (this.encendido === true) {
      this.velocidad = this.velocidad - Number(desacelerar);
      console.log(
        `el auto bajo su vel en ${desacelerar} va a ${this.velocidad}km/h`
      );
    } else {
        this.encenderApagar();
        this.velocidad = this.velocidad - Number(desacelerar);
        
        console.log(`el auto bajo su  velocidad en ${arranque} va a ${this.velocidad}km/h`)
      }
  }
}

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
golcito.encenderApagar();
golcito.cambiarColor("azul");
console.log(golcito);
golcito.encenderApagar();

golcito.acelerar(200);
golcito.frenar(20);
golcito.frenar(30);
golcito.frenar(50);
golcito.frenar(100);
golcito.encenderApagar();


//estado: es el valor de una propiedad en un momento dado
//binario(valores absolutos): encendido-apagado
//cuantitativo (es medible) : velocidad