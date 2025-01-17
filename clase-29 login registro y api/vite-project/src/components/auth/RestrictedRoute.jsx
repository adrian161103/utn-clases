import React, { useContext } from "react";
import { UserContext } from "../../contexts/UsersContext";
import { Navigate, Outlet } from "react-router-dom";

function RestrictedRoute() {
  const { user } = useContext(UserContext);
  if (user) {

    // navigate redirecciona , en este caso si hay usuario le envia directo al home
    return <Navigate to="/" />;
  } //outlet es la ruta base que se tiene (hijo del restrictedRoute)
  else {
    return <Outlet />;
  }
}

export default RestrictedRoute;
