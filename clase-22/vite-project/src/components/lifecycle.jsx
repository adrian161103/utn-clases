import { useEffect, useState } from "react";

function Lifecycle() {
  //define el estado count y define el dispatch modifica el valor count
  const [count, setCount] = useState(0);

  //funciones
  const handleIncrement = () => {
    //resolvemos la operacion
    var result = count + 1;
    //asignamos el valor al estado
    setCount(result);
  };
  const handleDecrement = () => {
    var result = count - 1;
    setCount(result);
  };

  useEffect(
    () => {
      //logica de montaje se ejecuta cuando se monta el componente
      console.log("componente montado");
      return () => {
        //logica de limpieza, liberar recursos eliminar elementos del dom
        //limpiar unputs de forms, etc
        console.log("componente desmontado");
      };
    },
    //array de dependencias, si elsta vacio el efecto se ejecuta al montar el componente
    //si no esta: el efecto se ejecuta cuanto se monta y actualiza
    []
  );

  useEffect(() => {
    //logica de actualizacion
    console.log("componente actualizado", count);
  }, [count]);
//se ejecuta cada vez que cambia el count (se ejecuta el estado)
  return (
    <div>
      <p>contador {count}</p>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
}

export default Lifecycle;
