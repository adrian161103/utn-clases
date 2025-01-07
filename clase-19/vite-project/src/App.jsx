import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//componente que depende de una funcion se llama componente funcional (en este caso es app)
function App() {
  //codigo de componente
  const [count, setCount] = useState(0);
 
  //lo que esta dentro del retorno se renderiza
  return (

    //fragments son fragmentos que sirven como caja contenedora elemento padre (<> </>)
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
export  {App, ensalada};
//exportado por defecto, significa que el archivo exportta solamente un componeten (app)  cuando lo importe en otro archivo como es default no necesita llaves, pero en cambio si quiero exportar mas de un archivo, no iria default y necesitaria si o si las llaves (e importacion y exportacion)