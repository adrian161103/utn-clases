import GreetingContainer from "./GreetingContainer";

function App() {
  const nombres = [
    {
      nombre: "miguel",
      apellido: "lopez",
      id: 1,
    },
    {
      nombre: "juan",
      apellido: "sanchez",
      id: 2,
    },
    {
      nombre: "javier",
      apellido: "diaz",
      id: 3,
    },
    {
      nombre: "roco",
      apellido: "alvarez",
      id: 4,
    },
  ];
  console.log(nombres);
  return <GreetingContainer names={nombres} />;
}

export default App;
