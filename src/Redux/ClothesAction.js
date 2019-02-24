export const fetchClothes = () => {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/categories")
      .then(r => r.json())
      .then(categories => dispatch(saveClothesToState(categories)));
  };
};

export const saveClothesToState = categories => {
  return { type: "SAVE_CLOTHES_TO_STATE", payload: categories };
};
