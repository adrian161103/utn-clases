import React ,{createContext, useEffect, useState } from "react";

//el contexto nos permite compartir datos o estados que tiene que ser accesibles en toda la aplicacion
//ej queres entrar al baño de la casa y tenes que entrar por la puerta principal o queres que ir a la cocina y tenes que entrar por la puerta principal (puerta que es la salida)

const UserContext = createContext();
function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  //login-crear una sesion

  //permite de entrada tener el usuario seteado en el estado
  useEffect(() => {
    //getitem permite leer el valor en sessionStorage
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      //lo paso de objeto a json para almacenarlo
      setUser(JSON.parse(storedUser));
    }
  }, []);

  //si tenemos un usuario loggeado lo vamos a loggear esta es la fun de login
  const handleLogin = loggedInUser => {
    setUser(loggedInUser);
    //sessionStorage memoria que permite guardar en el navegador (es poca memoria), set item permite guardar y crear un nuevo valor dentro del sessionStorage
    sessionStorage.setItem("user", JSON.stringify(loggedInUser));
  };

  //logout - cerrar sesion
  const handleLogout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
  }

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
}

export {UserContext, UserProvider};
