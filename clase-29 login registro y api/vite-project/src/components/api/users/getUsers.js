
const apiUrl  =import.meta.env.VITE_BASE_URL_USERS;

 export async function getUsers() {

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {

        throw new Error("algo salio mal");
      }
      const data = await response.json();
      //retorna los usuarios
      return data;
    } catch (error) {
      console.log(error);
    }
  }