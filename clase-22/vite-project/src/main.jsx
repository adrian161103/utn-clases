import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Reducer from "./components/reducer.jsx";


createRoot(document.getElementById("root")).render(
  //<StrictMode> encuentra bugs de forma temprana durante el desarrollo osea que hace pruebas y errores como ejecutar y refrescar para probarlo (montar y desmontar)
  <StrictMode>
    < Reducer />
  </StrictMode>
);
