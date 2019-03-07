const initialState = {
  cart: [],
  purchases: [],
  user: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // find the obj in the array and if it is there, return the obj or it'll return undefined
      let foundObj = state.cart.find(item => item.id === action.payload.id);
      if (!!foundObj) {
        // if the Item is in the array, make a copy of the obj and raising its quantity
        let item = { ...foundObj };
        item.quantity += 1;

        // mapping through the cart and if the id matches, replace the oldObj with the newObj
        const newArray = state.cart.map(itemObj => {
          if (itemObj.id === item.id) {
            return item;
          } else {
            return itemObj;
          }
        });
        return { ...state, cart: newArray };
      } else {
        // else if the Item is not in array, put it in the array with a quantity of 1
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }]
        };
      }

    case "REMOVE_FROM_CART":
      // find the obj that was clicked on,
      const removedObject = state.cart.find(
        item => item.id === action.payload.id
      );
      // make a copy if and decrease it's quantity by 1
      const product = { ...removedObject };
      product.quantity -= 1;

      // if the quantity is 0, remove it from the array entirely, taking it off of the page
      if (product.quantity === 0) {
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== product.id)
        };
      } else {
        // else, replace it with the new quantity
        const removedArray = state.cart.map(itemObj => {
          if (itemObj.id === product.id) {
            return product;
          } else {
            return itemObj;
          }
        });

        return { ...state, cart: removedArray };
      }

    case "ADD_USER":
      return { ...state, user: action.payload };

    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE_USER":
      return { ...state, user: {} };

    case "ADD_PURCHASES":
      return { ...state, purchases: action.payload };

    default:
      return state;
  }
};

export default userReducer;
