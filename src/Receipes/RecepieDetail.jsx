import React from "react";
import { Link, useParams } from "react-router-dom";
import { RecepieState } from "../context/Context";

const RecepieDetail = () => {
  const { id } = useParams();

  const { receipeState, recepieDispatch } = RecepieState();

  const recipe = receipeState.recipes.find(
    (recipe) => recipe.id === Number(id)
  );

  return (
    <div>
      <Link className="link" to="/">
        All Recepis
      </Link>
      <div className="recepiedetail-container">
        <h1>{recipe.recipeName}</h1>
        <div className="receipe-details">
          <img className="image" src={recipe.imageURL} />
          <div className="more-details">
            <h4>Cuisine: {recipe.cuisineType}</h4>
            <div>
              <h4>Ingredients:</h4>
              {recipe.ingredients.map((ingredient) => (
                <span className="ingredient">{ingredient},</span>
              ))}
            </div>
            <div>
              <h4>Instructions:</h4>

              <ol>
                {recipe.cookingInstructions.map((instruction) => (
                  <li>{instruction}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecepieDetail;
