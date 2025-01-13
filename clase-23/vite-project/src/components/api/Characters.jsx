import  { useEffect, useState } from "react";
function Characters() {
    const [ characters, setCharacters ] = useState([]);
  const fetchCharacters = () => {
  
    //llamado a la api (se vuelve una promesa)
    //response.json() permite transformar de formato json a objeto de js
    //esto nos permite usar funciones en nuestra data, iterar y mapear
    //fetch hace un get (traer informacion)-.verbo de http
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.log(error));
  };
  //se usa useeffect que nos permite  manejar un effecto que se ejecuta el fetch cuando la pagina se renderiza
  useEffect(() => {
    //se ejecuta el fetch cuando se renderiza la pagina
    fetchCharacters();
  }, []);
  return (
    <>
      <div>
        {characters.map((character, i) => (
            //necesita un contenedor por eso uso <>
          <div key={i}>
            <p>{character.name}</p>
            <img src={character.image} alt="image" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Characters;
