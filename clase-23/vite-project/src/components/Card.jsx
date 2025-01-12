import propTypes from "prop-types";
import batman from "../../public/img/batman.png";


function Card({
  image = batman,
  imageAlt,
  title,
  description,
  buttonTitle,
  action,
  buttonColor}
) {
  return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt={imageAlt} style={{ width: "100%", height: "200px" }} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}.</p>
          {/* modificamos la etiqueta a por button */}
          <button
          //creamos una prop accionable
          onClick={action}
            href="#"
            className="btn btn-primary"
            //style={{width: "18rem"}} va con doble llave para que sea un objeto
            style={{ background: buttonColor }}
          >
            {buttonTitle}
          </button>
        </div>
      </div>
  );
}

Card.propTypes = {
  image: propTypes.string,
  imageAlt: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  buttonTitle: propTypes.string.isRequired,
  action: propTypes.func.isRequired,
  buttonColor: propTypes.string,
}.isRequired;

export default Card;
