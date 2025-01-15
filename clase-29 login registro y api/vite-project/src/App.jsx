import "../public/css/style.css";
import Carousel from "./components/carousel";
import CardContainer from "./components/CardContainer";
import ServiceContainer from "./components/ServiceContainer";
import SectionGalery from "./components/SectionGalery";
import Page from "./components/layout/Page";
import { cards, galery, services, slidesData } from "./components/data/data";
function App() {
  

  return (
    <>
      <Page>
        <Carousel slides={slidesData} />
        <CardContainer cards={cards} />
        <ServiceContainer services={services} />
        <SectionGalery galery={galery} title={"galeria de imagenes"} />
      </Page>
    </>
  );
}

export default App;
