import * as actionTypes from "./ConstTypesSelect";


const initialState = {
  products: null,
};



export const selectReducer = (state = {initialState}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SELECT:
      return {
        ...state,
        isError: false,
        selectData: null,
        isLoading: true,
      };
    case actionTypes.FETCH_SELECT_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case actionTypes.FETCH_SELECT_SUCCESS:
      return {
        ...state,
        isError: false,
        selectsData: action.payload.data,
        isLoading: false,
      };
    default:
      return state;
  }
};









// export const SelectedProductReducer = (
//     state = { initialState },
//     { type, payload }
//   ) => {
//     switch (type) {
//       case ActionTypes.SELECTED_PRODUCTS:
//         return { ...state, ...payload };
//       case ActionTypes.REMOVE_SELECTED_PRODUCTS:
//         return {};
//       default:
//         return state;
//     }
//   };
