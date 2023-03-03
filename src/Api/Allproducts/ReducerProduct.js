import * as actionTypes from "./ConstantProduct";


const initialState = {
  products: null,
};


export const allProducts = (state = {initialState}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALLPRODUCT:
      return {
        ...state,
        isError: false,
        productAll: null,
        isLoading: true,
      };
    case actionTypes.FETCH_ALLPRODUCT_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case actionTypes.FETCH_ALLPRODUCT_SUCCESS:
      return {
        ...state,
        isError: false,
        productAll: action.payload.data,
        isLoading: false,
      };
        
    default:
      return state;
  }
};




// export const productReducer = (state = { initialState }, { type, payload }) => {
//   switch (type) {
//     case ActionTypes.SET_PRODUCTS:
//       return { ...state, products: payload };
//     default:
//       return state;
//   }
// };