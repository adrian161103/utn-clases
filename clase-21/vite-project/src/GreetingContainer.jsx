import Greeting from "./greeting";
import PropTypes from "prop-types";
function GreetingContainer({ names }) {
  //estado y seteador de estado

  return (
    <div>
      {names.map((nameItem) => (
        <Greeting
          key={nameItem.id}
          name={nameItem.nombre}
          lastName={nameItem.apellido}
          id={nameItem.id}
        />
      ))}
    </div>
  );
}

// definimos la prop
GreetingContainer.propTypes = {
  names: PropTypes.array.isRequired,
};
export default GreetingContainer;
