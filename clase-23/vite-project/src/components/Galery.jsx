import propTypes from "prop-types";
function Galery({imgSrc,
    imgAlt,}) {
  return (

    
      <section className="img-playa">
        <img src={imgSrc} alt={imgAlt} />
      </section>
    
  );
}

Galery.propTypes = {
  imgSrc: propTypes.string.isRequired,
  imgAlt: propTypes.string.isRequired,
};
export default Galery;
