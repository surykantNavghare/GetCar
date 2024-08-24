// reducers/index.js
const initialState = {
    cart:[]
  };
  
  function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART':{
            return {
                ...state,
                cart: [...state.cart, action.payload]
              };
        }
        case 'REMOVE_FROM_CART':{
          return {
            ...state,
            cart: state.cart.filter(item => item.name !== action.payload.name) // Remove the item from the cart
        };
        }
     
      default:
        return state;
    }
  }
  
  export default counterReducer;
  