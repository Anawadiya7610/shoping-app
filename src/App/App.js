import React from "react";
import Header from "../components/Header";
import { Routes, Route } from "react-router-dom";
import ProductAction from "../views/ProductAction";
import ProductDetail from "../views/ProductDetail";
import ProductComponent from "../views/ProductComponent";
import ProductorReducer from "../views/ProductReducer";
import ProductListing from "../views/ProductListing";
import Footer from "../components/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<ProductListing />} />

        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="*">404 not found ✌</Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
