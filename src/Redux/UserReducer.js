const initialState = {
  cart: [],
  purchases: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex(item => item.id === action.payload.id);
      const array = [...state.cart];
      array.splice(index, 1);
      return { ...state, cart: array };
    default:
      return state;
  }
};

export default userReducer;
