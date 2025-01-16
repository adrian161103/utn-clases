import { useState, useEffect, useContext } from "react";
import { getUsers } from "../api/users/getUsers";
import { UserContext } from "../../contexts/UsersContext";

function LoginForm() {
  //Creo tres constantes una para cada exportacion
  const { user, handleLogin,handleLogout } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  //este error nos permite mostrarle mensaje al usuario en la ui
  const [error, setError] = useState("");

  const [users, setUsers] = useState([]);

const emptyFields = formData.email === "" || formData.password === ""
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  //traemos los usuarios para comparar nuestros datos con lo que llega por formulario
  const getallUsers = async () => {
    try {
      const fetchedUsers = await getUsers();
      setUsers(fetchedUsers);
      console.log(users);
    } catch (error) {
      console.error(error);
    }
  };
  // con useEffect realiza el llamado a la api para traer los usuarios cuando la pagina se renderiza
  useEffect(() => {
    getallUsers();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    //con find buscamos en el listario el usuario que coincida con el email y password pasados por form
    const loggedUser = users.find(
      user =>
        user.email === formData.email && user.password === formData.password
    );

    if (loggedUser) {
      handleLogin(loggedUser);
      setError("logueado coorectamente");
    } else {
      setError("datos incorrectos");
    }
  };

  return (
    <form className="formLayout" onSubmit={handleSubmit}>
      {user ? <button onClick={handleLogout}>logout</button> :<></>}
      <h4 className="Formtitle">login</h4>

      <label htmlFor="email">Email</label>
      <input
        type="email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />

      <label htmlFor="password">contraseña</label>
      <input
        type="password"
        onChange={handleChange}
        name="password"
        value={formData.password}
      />
      {error && <p>{error}</p>}
      <div className="buttonLayout">
        <button type="submit" disabled={emptyFields} >enviar</button>
        <button type="reaset">borrar</button>
      </div>
    </form>
  );
}

export default LoginForm;
