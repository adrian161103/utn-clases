import "../public/css/style.css";
import Header from "./components/layout/header";
import Carousel from "./components/carousel";
function App() {
  const navLinks = [
    { name: "Home", url: "#" },
    { name: "Productos", url: "#" },
    { name: "escribinos", url: "#" },
    { name: "nosotros", url: "#" },
  ];
  const dropdownOptions = [
    { name: "empresa", url: "#" },
    { name: "casa", url: "#" },
    { name: "rojo", url: "#" },
  ];

  //alt
  //image
  //description
  //title
  
  const slides = [
    {
      Image: "./img/gatitos.png",
      Title: "michi",
      Description: "aguante los michis.",
      Alt: "gatos",
    },
    { Image: "./img/f1.webp", Title: "form 1", Description: "f1.", Alt: "f 1" },
    {
      Image: "./img/playa.jpg",
      Title: "vacaciones",
      Description: "OJALA.",
      Alt: "vacaciones",
    },
  ];

  return (
    <>
      <Header
        BrandUrl="#"
        imageAlt="aerolinea"
        navLinks={navLinks}
        dropdownOptions={dropdownOptions}
        dropdownTitle="menu"
      />

      <Carousel slides={slides} />
    </>
  );
}

export default App;
