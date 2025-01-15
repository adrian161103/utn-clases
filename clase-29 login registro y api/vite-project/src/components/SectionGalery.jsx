import propTypes from "prop-types";
import Galery from "./galery";
function SectionGalery({galery,title}) {
  return (
    <section className="section-galery">
      <h2>{title}</h2>
      <div className="div-galeria">
        {galery.map((galery, i) => (
            <Galery key={i} imgSrc={galery.imgSrc} imgAlt={galery.imgAlt} />
        ))}
      </div>
    </section>
  );
}

SectionGalery.propTypes = {
    title: propTypes.string.isRequired,
    galery:propTypes.arrayOf(
        propTypes.shape({
            imgSrc: propTypes.string,
            imgAlt: propTypes.string.isRequired
  
      })
    )
}.isRequired;
export default SectionGalery;
