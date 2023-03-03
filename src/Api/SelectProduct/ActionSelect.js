import * as actionTypes from "./ConstTypesSelect";
import axios from "axios";





export const fetchSelect = (id) => {
  return (dispatch) => {
    dispatch(fetchAsyncSelectInit());
    
   const baseURL= "https://fakestoreapi.com";
    axios
    .get(`https://fakestoreapi.com/products/${id}`)
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
  type: actionTypes.FETCH_SELECT,
});
export const fetchAsyncSelectFailure = (data) => ({
  type: actionTypes.FETCH_SELECT_FAILURE,
});
export const fetchAsyncSelectSuccess = (data) => ({
  type: actionTypes.FETCH_SELECT_SUCCESS,
  payload: { data },
});



// export const fetchProducts = () => {
//   return async function (dispatch, getState) {
//     const response = await FackeApi.get("/products");
//     dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
//   };
// };

// export const SetProducts = (products) => {
//   return {
//     type: ActionTypes.SET_PRODUCTS,
//     payload: products,
//   };
// };

// export const SelectedProduct = (product) => {
//   return {
//     type: ActionTypes.SELECTED_PRODUCTS,
//     payload: product,
//   };
// };

// export const RemoveSelectedProduct = () => {
//   return {
//     type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
//   };
// };

