import propTypes from "prop-types";

//intervalo, img src, img alt, titulo y descripcion
function CarouselItem({
  Interval,
  ImageSrc,
  ImageAlt,
  ItemTitle,
  ItemDescription,
  active,}
) {
  return (
    <div
      className={`carousel-item${active ? " active" : ""}`}
      data-bs-interval={Interval}
    >
      <img src={ImageSrc} className="d-block w-100" alt={ImageAlt} />
      <div className="carousel-caption d-none d-md-block">
        <h5> {ItemTitle} </h5>
        <p> {ItemDescription} </p>
      </div>
    </div>
  );
}
CarouselItem.propTypes = {
  interval: propTypes.string.isRequired,
  ImageSrc: propTypes.string.isRequired,
  ImageAlt: propTypes.string.isRequired,
  ItemTitle: propTypes.string.isRequired,
  ItemDescription: propTypes.string.isRequired,
  active: propTypes.bool.isRequired,
};

CarouselItem.defaultProps = {
interval:"5000",
};

export default CarouselItem;
