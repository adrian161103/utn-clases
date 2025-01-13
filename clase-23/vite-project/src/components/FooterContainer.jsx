import propTypes from "prop-types";
function FooterContainer({ links, socials }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          {/* otra manera de demostrar de que si no llega informacion el mapeo no se ejecuta y queda vacio o sin llenar el espacio. */}
          {links ?(
            links.map((link, i) => (
              <a key={i} href={link.url}>
                {link.name}
              </a>
            ))) :(<></>)
          }
        </div>
        <div className="social-media">
           {/* lo que hago con links && y el mapeo es dar a entender de que si me llega una info que lo mapee, en cambio si no me llega nada que no lo haga y no muestre nada  */}

          {socials &&
            socials.map((social, i) => (
              <a key={i} href={social.url}>
                <img src={social.image} alt={social.name} />
              </a>
            ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

FooterContainer.propTypes = {
  links: propTypes.arrayOf(
    propTypes.shape({
      links: propTypes.string.isRequired,
      socials: propTypes.string.isRequired,
    })
  ),
  socials: propTypes.arrayOf(
    propTypes.shape({
      url: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      icon: propTypes.string.isRequired,
    })
  ),
};

export default FooterContainer;
