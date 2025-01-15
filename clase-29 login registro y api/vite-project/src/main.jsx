import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/pages/Contact.jsx";
import Products from "./components/pages/Products.jsx";
import Error from "./components/Error.jsx";
import Login from "./components/layout/login.jsx";
import Register from "./components/layout/Register.jsx";


//escribimos en objetos el path y el element a utilizar a utilizar para crear las rutas
const routes =createBrowserRouter([
  {
    //aca definimos la ruta base, "/"
    path: "/",
    //elemento principal
    element: <App />,
    //con error element decidimos como se mostrara el error cuando suceda
    errorElement: <Error />
  },
  {
    path: "/contacto",
    element: <Contact />,
  },
  {
    path: "/productos",
    element: <Products />,
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
  {/*  RouterProvider maneja el listado de rutas */}
    <RouterProvider router={routes}/>
  </StrictMode>
);
