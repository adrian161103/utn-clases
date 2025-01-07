// codigo de ejemplo no sirve para trabajo es para alumnos

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));


//esta funcion hace una peticion a un servidor a traves de fetch, por lo tanto es asincronica
//async se coloca antes de "function"
const fetchCharacters = async function (url) {
  try {
    //hacemos una peticion a la url (peticion get)
    let response = await fetch(url);

    //convertimos la respuesta en json convirtiendola en objeto de js y la retornamos
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

const initialUrl = "https://rickandmortyapi.com/api/character";

//caso de uso
async function ejemplo() {
  try {
    const resultado = await fetchCharacters(initialUrl);
    //filtro para buscar un personaje que contenga la palabra rick en su nombre
    console.log(
      resultado.results.filter(character => character.name.includes("Rick"))
    )
  } catch (error) {
    console.error(error);
  }
}


//ejecucion
ejemplo();
console.log("hola")