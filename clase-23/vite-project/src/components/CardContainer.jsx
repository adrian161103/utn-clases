import propTypes from "prop-types";
import Card from "./Card";

function CardContainer({ cards }) {
  const handleCard = title => {
    console.log(title);
  };
  return (
    <section className="card-container">
      {cards.map((card, i) => (
        <Card
          key={i}
          imageAlt={card.imageAlt}
          title={card.title}
          description={card.description}
          buttonTitle={card.buttonTitle}
          action={() => {
            handleCard(card.title);
          }}
          buttonColor={card.buttonColor}
          image={card.image}
        />
      ))}
    </section>
  );
}
CardContainer.propTypes = {
  cards: propTypes.arrayOf(
    propTypes.shape({
      image: propTypes.string,
      imageAlt: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
      description: propTypes.string.isRequired,
      buttonTitle: propTypes.string.isRequired,
      buttonColor: propTypes.string,
    })
  ).isRequired,
};

export default CardContainer;