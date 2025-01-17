import React, { useContext } from "react";
import { UserContext } from "../../contexts/UsersContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { user } = useContext(UserContext);
  if (!user) {
    //navigate redirecciona , en este caso si no hay usuario le envia directo al login
    return <Navigate to="/register" />;
  } //outlet es la ruta base que se tiene (hijo del protectedRoute)
  else {
    return <Outlet />;
  }
}

export default ProtectedRoute;
