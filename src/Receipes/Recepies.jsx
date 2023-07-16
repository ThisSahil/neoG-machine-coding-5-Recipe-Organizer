import React, { useState } from "react";
import { RecepieState } from "../context/Context";
import RecepieCard from "./RecepieCard";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import "./Recepies.css";
import "./Modal.css";

const Recepies = () => {
  const { receipeState, recepieDispatch } = RecepieState();
  // console.log(receipeState.recipes);

  const delimiter = ",";

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [recipeData, setRecipeData] = useState({
    id: Math.floor(Math.random() * 100 + 1),
    recipeName: "",
    ingredients: [],
    cookingInstructions: [],
    cuisineType: "",
    imageURL: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecipeData({ ...recipeData, [name]: value });
  };

  const handleInstructionChange = (event) => {
    const instructionsArray = event.target.value.split(delimiter);
    setRecipeData({ ...recipeData, cookingInstructions: instructionsArray });
  };

  const handleIngriedentChange = (event) => {
    const ingriedentsArray = event.target.value.split(delimiter);
    setRecipeData({ ...recipeData, ingredients: ingriedentsArray });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    receipeState.recipes.push(recipeData);
    console.log(receipeState.recipes);

    const dishJSON = JSON.stringify(receipeState.recipes);
    localStorage.setItem("newDish", dishJSON);

    recepieDispatch({ type: "FETCH_RECEPIES", payload: receipeState.recipes });
    closeModal();
  };

  const savedDishJSON = localStorage.getItem("newDish");
  const savedDish = JSON.parse(savedDishJSON);

  if (savedDish.length > 0) {
    receipeState.recipes = savedDish;
  }

  const searchFilter = receipeState.searchFilter.toLowerCase();

  const searchOn = receipeState.filterOn;

  let updated = receipeState.recipes;

  if (searchFilter) {
    if (searchOn === "Cuisine") {
      updated = receipeState.recipes.filter((recipe) =>
        recipe.cuisineType.toLowerCase().includes(searchFilter)
      );
    } else if (searchOn === "Ingredients") {
      updated = receipeState.recipes.filter((recipe) => {
        const ingredient = recipe.ingredients.map((ing) => ing.toLowerCase());
        return ingredient.includes(searchFilter);
      });
    } else {
      // if (searchOn === "Name")
      updated = receipeState.recipes.filter((recipe) =>
        recipe.recipeName.toLowerCase().includes(searchFilter)
      );
    }
  }

  return (
    <div className="all-recepie">
      <h1>All Recipes:</h1>
      <div className="recepie-container">
        {updated.map((recipe) => (
          <RecepieCard recipe={recipe} />
        ))}

        <div onClick={openModal} className="add-icon">
          <AddCircleOutlineTwoToneIcon fontSize="large" />
        </div>
      </div>

      {isOpen && (
        <div className="modal">
          <form className="modal-content" onSubmit={handleSubmit}>
            <h2>Add Recipe</h2>

            <input
              placeholder="Recipe Name:"
              type="text"
              id="recipeName"
              name="recipeName"
              value={recipeData.recipeName}
              onChange={handleInputChange}
              required
            />

            <input
              placeholder="Add URL of recipe image"
              type="text"
              id="imageURL"
              name="imageURL"
              value={recipeData.imageURL}
              onChange={handleInputChange}
              required
            />

            <textarea
              placeholder="Ingredients:  (Seperate each Ingredient with ,(comma))"
              id="ingredients"
              name="ingredients"
              value={recipeData.ingredients}
              onChange={handleIngriedentChange}
              required
            />

            <textarea
              placeholder="Instructions:   (Seperate each Instruction with ,(comma))"
              id="cookingInstructions"
              name="cookingInstructions"
              value={recipeData.cookingInstructions}
              onChange={handleInstructionChange}
              required
            />

            <input
              placeholder="Cuisine:"
              type="text"
              id="cuisineType"
              name="cuisineType"
              value={recipeData.cuisineType}
              onChange={handleInputChange}
              required
            />

            <div className="modal-buttons">
              <button type="submit">Add Recipe</button>
              <button className="close-button" onClick={closeModal}>
                Close
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Recepies;
