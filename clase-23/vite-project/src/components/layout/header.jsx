import propTypes from "prop-types";
import planeBrand from "../../../public/img/aerolinea.png";

//proptypes permite defninir las props, pasarles un tip
//si la prop isrequired significa que es obligatoria
//recuerda que proptypes va en minuscula y la prop en mayuscula

const Header = ({
  //  ImageSrc = planeBrand, manera alternativa de colococar una imagen imnportando la imagen dandole un nomnbre y colocandolo por "default". sin necesidad de colocarle un "isrequierid" eliminando su src del apartado app ya que vendria por defecto y ese no se modificaria.

  ImageSrc = planeBrand,
  imageAlt,
  // brandUrl es redireccion a la pagina inicial.
  BrandUrl,
  navLinks,
  dropdownTitle,
  dropdownOptions,
}) => {
  return (
    //imagen: href de a, src de img, alt de img
    <header>
      {/* <!-- inicio nav --> */}
      <nav className=" navClass navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href={BrandUrl}>
            <img src={ImageSrc} alt={imageAlt} />{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* desde aca se itera (usamos map) */}
              {navLinks.map((link, i) => (
                <li className="nav-item" key={i}>
                  <a className="nav-link" href={link.url}>
                    {link.name}
                  </a>
                </li>
              ))}

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {dropdownTitle}
                </a>
                <ul className="dropdown-menu">
                  {dropdownOptions.map((option, i) => (
                    <li key={i}>
                      <a className="dropdown-item" href={option.url}>
                        {option.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* <!-- fin nav --> */}
    </header>
  );
};

Header.propTypes = {
  ImageSrc: propTypes.string,
  imageAlt: propTypes.string,
  BrandUrl: propTypes.string.isRequired,
  //arrayof una propiedad QUE TPERMITE TIPAR de que va  a ser el array, osea que especificamos que tiene dentro el array
  navLinks: propTypes.arrayOf(
    //shape es para tipar un objeto (shape es forma) aca se da forma sobre de que es array (que tenemos un objeto dentro del array)
    propTypes.shape({
      url: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
    })
  ),
  dropdownTitle: propTypes.string.isRequired,
  dropdownOptions: propTypes.arrayOf(
    propTypes.shape({
      url: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
    })
  ),
};
//como tipar array de strings:
//propTypes.arrayOf(propTypes.string).isRequired

//definimos props por defecto
Header.defaultProps = {
  Imagealt: "imagen avion",
  imagesrc: planeBrand,
};
export default Header;
