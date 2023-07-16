import React, { createContext, useContext, useEffect, useReducer } from "react";
import { recipes } from "../data";
import { recepieReducer } from "./Reducer";

const ReceipeContext = createContext();

const Context = ({ children }) => {
  const [receipeState, recepieDispatch] = useReducer(recepieReducer, {
    recipes: [],
    filterOn: "",
    searchFilter: "",
  });

  const fetchRecepies = () => {
    setTimeout(() => {
      recepieDispatch({ type: "FETCH_RECEPIES", payload: recipes });
    }, 1000);
  };

  useEffect(() => {
    fetchRecepies();
  }, []);

  return (
    <ReceipeContext.Provider value={{ receipeState, recepieDispatch }}>
      {children}
    </ReceipeContext.Provider>
  );
};

export default Context;

export const RecepieState = () => {
  return useContext(ReceipeContext);
};
