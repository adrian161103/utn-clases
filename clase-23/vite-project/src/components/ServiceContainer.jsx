import propTypes from "prop-types";
import Service from "./Service";

function ServiceContainer({ services }) {
  return (
    <section className="servicios">
      <h2>servicios</h2>
      {services.map((service, i) => (
          <Service key={i}
          description={service.description}
          title={service.title}
          image={service.image}
          titleColor="green"
          color="red"
          even={i % 2 === 0}
           />
      ))}
    </section>
  );
}
ServiceContainer.propTypes = {
  services: propTypes.arrayOf(
    //shape es dar forma
      propTypes.shape({
        title: propTypes.string.isRequired,
        description: propTypes.string.isRequired,
        image: propTypes.string.isRequired,
        titleColor: propTypes.string,
        color: propTypes.string,
      })
  )

}.isRequired;
export default ServiceContainer;
