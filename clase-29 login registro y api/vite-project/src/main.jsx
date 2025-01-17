import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/pages/Contact.jsx";
import Products from "./components/pages/Products.jsx";
import Error from "./components/Error.jsx";
import Login from "./components/layout/login.jsx";
import Register from "./components/layout/Register.jsx";
import { UserProvider } from "./contexts/UsersContext.jsx";
import ProtectedRoute from "./components/auth/ProtectedRoute.jsx";
import RestrictedRoute from "./components/auth/RestrictedRoute.jsx";

//escribimos en objetos el path y el element a utilizar a utilizar para crear las rutas
const routes = createBrowserRouter([
  {
    //aca definimos la ruta base, "/"
    path: "/",
    //elemento principal
    element: <App />,
    //con error element decidimos como se mostrara el error cuando suceda
    errorElement: <Error />,
  },
  {
    //protectedRoute nos permite proteger las rutas y convertirlos en elementos hijos, para luego con outlet poder mostrarlos
    element: <ProtectedRoute />,
    children: [
      {
        path: "/productos",
        element: <Products />,
      },
    ],
  },
  {
    element: <RestrictedRoute />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/contacto",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      {/*  RouterProvider maneja el listado de rutas */}
      <RouterProvider router={routes} />
    </UserProvider>
  </StrictMode>
);
