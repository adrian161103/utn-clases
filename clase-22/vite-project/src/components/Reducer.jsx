import  { useReducer } from "react";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function Reducer() {
  //el reducer es la funcion que maneja el estado y el valor inicial como es un contador comienza en 0 "count:0"
  const [state, setState] = useReducer(counterReducer, { count: 0 });

  const increment = () => {
    setState({ type: "INCREMENT" });
  };
  const decrement = () => {
    setState({ type: "DECREMENT" });
  };
  return (
    <div>
      <p>count:{state.count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default Reducer;
