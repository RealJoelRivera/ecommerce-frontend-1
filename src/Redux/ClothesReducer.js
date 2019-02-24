const initialState = {
  categories: []
};

const clothesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_CLOTHES_TO_STATE":
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};

export default clothesReducer;
