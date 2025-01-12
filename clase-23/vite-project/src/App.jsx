import "../public/css/style.css";
import Header from "./components/layout/header";
import Carousel from "./components/carousel";
import CardContainer from "./components/CardContainer";

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

  const cards = [
    {
      image: "https://cdn.sanity.io/images/5vm5yn1d/pro/5cb1f9400891d9da5a4926d7814bd1b89127ecba-1300x867.jpg?fm=webp&q=80",
      title: "batman",
      description: "aguante los michis.",
      buttonTitle: "action",
      buttonColor: "red",
      imageAlt: "perro",
    },
    {
      title: "batman 2",
      description: "batman cap 2.",
      buttonTitle: "action",
      buttonColor: "black",
      imageAlt: "batman",

    },
    {
      title: "batman 3",
      description: "batman 3.",
      buttonTitle: "action",
      buttonColor: "green",
      imageAlt: "batman",

    },
    {
      title: "batman 5",
      description: "batman 5.",
      buttonTitle: "action",
      buttonColor: "cyan",
      imageAlt: "batman",
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

      <CardContainer cards={cards} />
    </>
  );
}

export default App;
