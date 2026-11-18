import PropTypes from "prop-types";
export const RecipeInfo = ({ resipe }) => (
  <li>
    <h2>{resipe.title}</h2>
    <p>Час готування: {resipe.cookingTime} хвилин</p>
    <p>Складність {resipe.difficulty}</p>
    <img src={resipe.image} alt={resipe.title} />
    <p>Інгредієнти:</p>
    <ul>
      {resipe.ingredients.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <p>Інструкція приготування:</p>
    <ol>
      {resipe.instructions.map((step, index) => (
        <li key={index}>{step}</li>
      ))}
    </ol>
  </li>
);

RecipeInfo.PropTypes = {
  resipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cookingTime: PropTypes.number,
    difficulty: PropTypes.number,
    image: PropTypes.string,
    ingredients: PropTypes.array,
    instructions: PropTypes.array,
  }),
};
