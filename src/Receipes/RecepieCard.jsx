import React from "react";
import "./Recepies.css";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { useNavigate } from "react-router-dom";
import { RecepieState } from "../context/Context";

const RecepieCard = ({ recipe }) => {
  const navigate = useNavigate();

  const { receipeState, recepieDispatch } = RecepieState();
  // console.log(receipeState.recipes);

  const handleDeleteClick = (id) => {
    const updated = receipeState.recipes.filter((recipe) => recipe.id !== id);
    const dishJSON = JSON.stringify(updated);
    localStorage.setItem("newDish", dishJSON);

    recepieDispatch({ type: "FETCH_RECEPIES", payload: updated });
  };

  return (
    <div>
      <div className="card-container">
        <div className="icons">
          <EditRoundedIcon className="icon" />
          <DeleteRoundedIcon
            onClick={() => handleDeleteClick(recipe.id)}
            className="icon"
          />
        </div>
        <img
          onClick={() => navigate(`/recepie/${recipe.id}`)}
          src={recipe.imageURL}
        />
        <h3>{recipe.recipeName}</h3>
        <div>
          <div className="detail">
            <h5>Cuisine Type:</h5> {recipe.cuisineType}
          </div>
          <div className="detail">
            <h5>Ingredients:</h5> See Recipe {">"}
          </div>
          <div className="detail">
            <h5>Instructions:</h5> See Recipe {">"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecepieCard;
