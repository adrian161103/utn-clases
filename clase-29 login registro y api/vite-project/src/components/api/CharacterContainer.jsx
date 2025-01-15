import propTypes from "prop-types";
function CharacterCard({character, }) {
  return (
    <div className="characterCard">
      <p>{character.name}</p>
      <img src={character.image} alt="image" />
    </div>
  );
}
CharacterCard.propTypes = {
  character: 
    propTypes.shape({
      name: propTypes.string.isRequired,
      image: propTypes.string.isRequired,
  }).isRequired,
};

export default CharacterCard;
