import React, { useState } from "react";

//lista de tareas

function App() {
  // lista de tareas
  const [task, setTask] = useState([]);
  // tareas nuevasn valor inicial para un string ""
  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    //validar que no te llegue un string vacio
    //trim() - poda - elimina espacios adelante y atras de un string
    if (newTask.trim() !== "") {
        //spread operator ... trae todo lo que hay en task
        //añado una tarea nueva a las ya existentes
        setTask([...task, {text: newTask}]);
        //limpiar el imput con el texto anterior
        setNewTask("");
    }
  }
  return (
    <div>
      <h1>lista de tareas</h1>
      {/* la "e" es de evento, target es como decir el objetivo de la accion*/}
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>agregar tarea</button>

      <ul>
        {/* para iterar(repetir un segmento o conjunto de secciones) se usa map en el cual se intenta desglozar el array ) */}
        {/* la key se usa para indicar que el elemento es unico (que interactuo por cada uno
        le genera una identidad unica ej key 1, 2 , 3 , etc) */}
        {task.map((task, index) => <li key={index}>{task.text}</li>) }
      </ul>
    </div>
  );
}
export default App;
