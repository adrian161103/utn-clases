//esta funcion hace el llamado a la api y retorna la respuesta
//llamado a la api lo hacemos a traves de fetch
//definimos la funcion como asincronica porq    solicito informacion a una api
async function FetchNasa(count) {
  try {
    if(count) {
    //necesitamos generar una espera con await para que llegue la info
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=SUcf0VJSaXHuA8ZLM2BHSujMYjjzZQpL1CJfwwpP&count=${count}`
    );

    //si no sale bien que me genere un error y lo muestra, en caso de que response no fallara evalua el "data"
    if (!response.ok) {
      throw new Error("algo salio mal");
    }
    //convertimos la respuesta de json a obj de js
    const data = await response.json();
    console.log(data);
    return data;
}
return[];
  } catch (error) {
    console.error(error);
  }
}

export default FetchNasa;
