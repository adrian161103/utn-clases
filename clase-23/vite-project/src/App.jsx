import "../public/css/style.css";
import Header from "./components/layout/header";
import Carousel from "./components/carousel";
import CardContainer from "./components/CardContainer";
import ServiceContainer from "./components/ServiceContainer";
import SectionGalery from "./components/SectionGalery";
import FooterContainer from "./components/layout/FooterContainer";
import Characters from "./components/api/Characters";
function App() {
  const navLinks = [
    { name: "Home", url: "#" },
    { name: "Productos", url: "#" },
    { name: "contacto", url: "#" },
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
      image:
        "https://cdn.sanity.io/images/5vm5yn1d/pro/5cb1f9400891d9da5a4926d7814bd1b89127ecba-1300x867.jpg?fm=webp&q=80",
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
  const services = [
    {
      title: "transporte ferroviario",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, error. Dolorum culpa similique dicta ipsam quaerat saepe incidunt non aperiam, repudiandae temporibus dolorem perferendis nihil quibusdam at veniam nemo accusantium! At nobis possimus deserunt, beatae ullam molestias reprehenderit fuga dolorem.",
      image: "./img/playa.jpg",
    },
    {
      title: "transporte ferroviario",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, error. Dolorum culpa similique dicta ipsam quaerat saepe incidunt non aperiam, repudiandae temporibus dolorem perferendis nihil quibusdam at veniam nemo accusantium! At nobis possimus deserunt, beatae ullam molestias reprehenderit fuga dolorem.",
      image: "./img/playa.jpg",
    },
    {
      title: "transporte ferroviario",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, error. Dolorum culpa similique dicta ipsam quaerat saepe incidunt non aperiam, repudiandae temporibus dolorem perferendis nihil quibusdam at veniam nemo accusantium! At nobis possimus deserunt, beatae ullam molestias reprehenderit fuga dolorem.",
      image: "./img/playa.jpg",
    },
    {
      title: "transporte ferroviario",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, error. Dolorum culpa similique dicta ipsam quaerat saepe incidunt non aperiam, repudiandae temporibus dolorem perferendis nihil quibusdam at veniam nemo accusantium! At nobis possimus deserunt, beatae ullam molestias reprehenderit fuga dolorem.",
      image: "./img/playa.jpg",
    },
  ];
  const galery = [
    {
      imgSrc: "./img/playa.jpg",
      imgAlt: "playa",
    },
    {
      imgSrc: "./img/playa.jpg",
      imgAlt: "playa",
    },
    {
      imgSrc: "./img/playa.jpg",
      imgAlt: "playa",
    },
    {
      imgSrc: "./img/playa.jpg",
      imgAlt: "playa",
    },
    {
      imgSrc: "./img/playa.jpg",
      imgAlt: "playa",
    },
    {
      imgSrc: "./img/playa.jpg",
      imgAlt: "playa",
    },
    {
      imgSrc: "./img/playa.jpg",
      imgAlt: "playa",
    },
    {
      imgSrc: "./img/playa.jpg",
      imgAlt: "playa",
    },
    {
      imgSrc: "./img/playa.jpg",
      imgAlt: "playa",
    },
    {
      imgSrc: "./img/playa.jpg",
      imgAlt: "playa",
    },
  ];
  const links = [
    {url: "/about", name: "acerca de nosotros"},
    {url: "/contact", name: "contacto"},
    {url: "/privacy", name: "Privacy policy"},
    {url: "/terms", name: "Terms of Service"},
  ]
  const social = [
    {
      url:"https://facebook.com",
      image:"https://img.icons8.com/ios-filled/50/000000/facebook-new.png",
      name:"Facebook",
    },
    {
      url:"https://twitter.com",
      image:"https://img.icons8.com/ios-filled/50/000000/twitter.png",
      name:"Twitter",
    },
    {
      url:"https://instagram.com",
      image:"https://img.icons8.com/ios-filled/50/000000/instagram-new.png",
      name:"Instagram",
    },
    {
      url:"https://linkedin.com",
      image:"https://img.icons8.com/ios-filled/50/000000/linkedin.png",
      name:"LinkedIn",
    },
    
  ]
  return (
    <>
      <Header
        BrandUrl="#"
        imageAlt="aerolinea"
        navLinks={navLinks}
        dropdownOptions={dropdownOptions}
        dropdownTitle="menu"
      />

      <Carousel slides={slides}/>
      <Characters/>
      <CardContainer cards={cards} />
      <ServiceContainer services={services} />
      <SectionGalery galery={galery} title={"galeria de imagenes"}/>
      <FooterContainer links={links} socials={social}/>
    </>
  );
}

export default App;
