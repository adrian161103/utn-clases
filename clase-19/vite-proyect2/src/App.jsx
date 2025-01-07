import react, { useState } from "react";

function App() {
  //estados
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);
  const [resultado, setresultado] = useState(0);

  //funcion que hace las cuentas
  //toda funcion que esta relacionado a eventos se va a llamar handler (manejador)
  const handlerOperation = (operation) => {
    if(operation === "no puede dividir nro mayor al menor"){

      console.log({num1, num2})
    }
    switch (operation) {
      case "suma":
        setresultado(num1 + num2);
        break;

        case "resta":
        setresultado(num1 - num2);
        break;

        case "multiplicar":
          setresultado(num1 * num2);
          break;

          case "dividir":
            setresultado(num1 / num2);
            break;
        

      default:
        setresultado(0);
        break;
    }
  };
    return (
      <div>
        <label>nro 1</label>
        <input
          type="number"
          onChange={(evento) => setnum1(Number(evento.target.value))}
        />

        <button onClick={() => handlerOperation("suma")}>suma</button>
        <button onClick={() => handlerOperation("resta")}>resta</button>
        <button onClick={() => handlerOperation("multiplicar")}>multiplicar</button>
        <button onClick={() => handlerOperation("dividir")}>dividir</button>

        <label>nro 2</label>
        <input
          type="number"
          onChange={(evento) => setnum2(Number(evento.target.value))}
        />
        <div>
          <label>resultado</label>
          <br />
          <span>{resultado}</span>
        </div>
      </div>
    );
  };


export default App;
