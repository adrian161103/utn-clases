  //dentro del fetch armamos la peticion
  const apiUrl  =import.meta.env;

 export async function addUser(user, urlBase) {
    try {
      const response = await fetch(urlBase, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        //transladamos de lenguaje  javascript json a (string a stringify)
        body: JSON.stringify(user),
      });
      //aca pregunto si no sale bien que me genere un error y lo muestra
      if (!response.ok) {
        //throw new Error("algo salio mal") sirve como retorno, finaliza la ejecucion
        throw new Error("algo salio mal");
      }
      //aca transladamos de lenguaje de json a lenguaje de js
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }