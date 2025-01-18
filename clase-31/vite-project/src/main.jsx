import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./pages/Product.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
//de react router donm necesitamos,
//crear las turas a traves de createbrouserRouter
//proveeer las rutas a las aplicacion con routerprovider

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/producto",
    element: <Product />,
  },
  {
    path: "/contacto",
    element: <Contact />,
  },
]);

//aca se renderiza la el proyecto
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>
);
