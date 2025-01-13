import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);
  //error tiene 3 datos:
  //StatusText: estado del error
  //Message: mensaje del error (dato que recibe por excelencia de cualquier error)
  //status: codigo del error
  return (
    <div>
      <h1>ERROR</h1>
      <p>Lo sentimos, un error ha ocurrido</p>
      <p>Estado del error: {error.statusText || error.message}</p>
      <p> {error.status ? `Error del tipo: ${error.status}` : ""} </p>
    </div>
  );
}

export default Error;
