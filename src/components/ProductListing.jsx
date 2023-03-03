import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent"
import { fetchAllProduct } from "../Api/Allproducts/ActionProducts";
import "./styles.css";

function ProductListing() {
  

  return (
    <div className="component">
      <div className="ui grid container">
        <ProductComponent />
      </div>
    </div>
  );
}

export default ProductListing;
