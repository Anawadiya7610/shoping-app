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



