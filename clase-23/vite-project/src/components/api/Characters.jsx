import  { useEffect, useState } from "react";
import CharacterCard from "./CharacterContainer";
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
      <div className="characters-container">
        {characters.map((character, i) => (
            //necesita un contenedor por eso uso <>
            <CharacterCard key={i} character={character}/>
        ))}
      </div>
  );
}

export default Characters;
