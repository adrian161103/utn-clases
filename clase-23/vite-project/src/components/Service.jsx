import propTypes from "prop-types";

function Service({ title, description, image, titleColor, color, even }) {
  //even es un booleano que nos indica si es par o impar para cambiar el estilo en este caso , no es requerido (isrequired) porque si no todos obligatoriamente tendrian que llevar si o si
  return (
    <article className={`servicies-container ${even ? "even-card":""}`}>
      <div>
        <h3 style={{ color: titleColor }}>{title}</h3>
        <hr style={{ color: titleColor }} />
        <p style={{ color: color }}>{description}</p>
      </div>
      <img src={image} alt="imagen servicio" />
    </article>
  );
}

Service.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  titleColor: propTypes.string,
  color: propTypes.string,
  even: propTypes.bool,
}.isRequired;
export default Service;
