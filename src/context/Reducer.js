export const recepieReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_RECEPIES":
      return { ...state, recipes: action.payload };

    case "FETCH_ON":
      return { ...state, filterOn: action.payload };

    case "FETCH_SEARCH":
      return { ...state, searchFilter: action.payload };

    default:
      return state;
  }
};
