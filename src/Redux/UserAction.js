export const addToCart = item => {
  return { type: "ADD_TO_CART", payload: item };
};

export const removeFromCart = item => {
  return { type: "REMOVE_FROM_CART", payload: item };
};

export const userLogIn = user => {
  console.log(user);
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
        console.log(object);
        console.log(object.jwt);
        localStorage.setItem("jwt", object.jwt);
        dispatch({ type: "ADD_USER", payload: object.user });
      });
  };
};
