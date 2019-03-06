export const addToCart = item => {
  return { type: "ADD_TO_CART", payload: item };
};

export const removeFromCart = item => {
  return { type: "REMOVE_FROM_CART", payload: item };
};

export const userLogIn = user => {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(r => r.json())
      .then(object => {
        localStorage.setItem("jwt", object.jwt);
        dispatch({ type: "ADD_USER", payload: object.user });
      });
  };
};

export const userSignUp = user => {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(r => r.json())
      .then(object => {
        localStorage.setItem("jwt", object.jwt);
        dispatch({ type: "ADD_USER", payload: object.user });
      });
  };
};

export const clearCart = items => {
  return dispatch => {
    console.log(items);
    fetch("http://localhost:3000/api/v1/carts", {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("jwt"),
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ cartItems: items })
    })
      .then(r => r.json())
      .then(console.log);
  };
};
