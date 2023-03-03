import axios from "axios";
import * as actionTypes from "./ConstantProduct";


export const fetchAllProduct = () => {
  return (dispatch) => {
    dispatch(fetchAsyncSelectInit());
   const baseURL= "https://fakestoreapi.com";
  axios
   .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        if (response !== undefined) {
          dispatch(fetchAsyncSelectSuccess(response.data));
          console.warn("data:--", response.data);
        }
      })
      .catch(function (error) {
        dispatch(fetchAsyncSelectFailure());
      });
  };
};


export const fetchAsyncSelectInit = () => ({
  type: actionTypes.FETCH_ALLPRODUCT,
});
export const fetchAsyncSelectFailure = (data) => ({
  type: actionTypes.FETCH_ALLPRODUCT_FAILURE,
});
export const fetchAsyncSelectSuccess = (data) => ({
  type: actionTypes.FETCH_ALLPRODUCT_SUCCESS,
  payload: { data },
});






// export const fetchProducts = () => {
//   return async function (dispatch, getState) {
//     const response = await 
//     dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
//   };
// };

// export const SetProducts = (products) => {
//   return {
//     type: ActionTypes.SET_PRODUCTS,
//     payload: products,
//   };
// };


// export const RemoveSelectedProduct = () => {
//   return {
//     type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
//   };
// };
