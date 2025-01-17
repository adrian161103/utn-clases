import { useState } from "react";
import { addUser } from "../api/users/addUser";

const apiUrl  =import.meta.env.VITE_BASE_URL_USERS;
function RegisterForm() {
  //https://67881315c4a42c9161093c8d.mockapi.io/api/users
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    gender: "#",
    password: "",
  });
  function handleChange(e) {
    setFormData({
      // ...formData "..." spread operator, toda la informacion que tenemos la vuelca aca, le da acceso al interior de un objeto iterable
      ...formData,
      //.name no es una propiedad, es una key del objeto que se encuentra en el   input "name" 
      [e.target.name]: e.target.value,
    }); //nos trae los valores de los imputs
   
  }



  function sendUser(e) {
    e.preventDefault(); // evitamos que el formulario se recargue y pueda ejecutar la accion sin reinicar la pagina
    addUser(formData,apiUrl);
    console.log(apiUrl,formData );
  }

  return (
    //traemos la informacion logica que genere el usuario
    <form className="formLayout" onSubmit={sendUser}>
      <h4 className="Formtitle">Registro de usuario</h4>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="firstName">nombre</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />

      <label htmlFor="lastName">apellido</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />

      <label htmlFor="gender">Sexo</label>
      <select name="gender" value={formData.gender} onChange={handleChange}>
      <option value="#" selected>seleccione genero</option>

        <option value="M">masculino</option>
        <option value="F">femenino</option>
        <option value="NB">no binario</option>
        <option value="O">otro</option>
      </select>

      <label htmlFor="password">cree su contraseña</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <div className="buttonLayout">
        <button type="submit">enviar</button>
        <button type="reaset">borrar</button>
      </div>

      {/* llamado a la accion */}
      <p>
        ¿ya tienes cuenta?
        <a href="/login">logeate</a>
      </p>
    </form>
  );
}

export default RegisterForm;
