import React from "react";
import Header from "../components/Header";
import { Routes, Route } from "react-router-dom";
import ProductAction from "../components/ProductAction";
import ProductDetail from "../components/ProductDetail";
import ProductComponent from "../components/ProductComponent";
import ProductorReducer from "../components/ProductReducer";
import ProductListing from "../components/ProductListing";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<ProductListing />} />

        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="*">404 not found ✌</Route>
      </Routes>
    </div>
  );
}

export default App;
