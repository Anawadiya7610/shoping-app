import {applyMiddleware,compose } from "redux";
import reducers from "./AppReducer";
import thunk from "redux-thunk";
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;




const store = configureStore(
    {reducer: reducers},
    composeWithDevTools(applyMiddleware(thunk))
    );
    
    
    export default store;
    // const store = createStore(reducers,
    // composeEnhancers(applyMiddleware(thunk)))
    // export default store;