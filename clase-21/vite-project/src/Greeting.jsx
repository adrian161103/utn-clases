import PropTypes from "prop-types";

//de manera general usamos "props" en js todo es un objeto
// function Greeting(props) {
//     return <h1>hola, {props.name}</h1>;
// }

//de manera especifica
function Greeting({ name, lastName, id }) {
  return <h1>hola, {`${name} ${lastName}, tu id es: ${id}`}!</h1>;
}

Greeting.proptypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Greeting;
