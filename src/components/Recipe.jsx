import recipes  from "../data/recipies.json";
import { RecipeInfo } from "./RecipeInfo";
import PropTypes from 'prop-types';
export const Recipe = () => (
  <>
    <ul>
      {recipes.map((recipe) => (
      <RecipeInfo  key={recipe.id} resipe={recipe}/>
      ))}
    </ul>
  </>
);

