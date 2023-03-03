import { combineReducers } from "redux";
import { allProducts } from "../Api/Allproducts/ReducerProduct";
import { selectReducer } from "../Api/SelectProduct/ReducerSelect";

const reducers = combineReducers({
    allProducts:allProducts,
    product:selectReducer,
});

export default reducers;