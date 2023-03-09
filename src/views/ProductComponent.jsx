import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllProduct } from "../Api/Allproducts/ActionProducts";
import "./styles.css";

function ProductComponent() {
  const product = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProduct());
  }, []);

  let result = product.allProducts.productAll;

  // let products = null;
  if (result !== undefined && result !== null) {
    const renderList = result.map((product, index) => {
      const { id, title, image, category, price } = product;

      return (
        <div className="ProductData" key={id}>
          <Link to={`/product/${id}`}>
            <div className="ui link cards">
              <div className="card">
                <div className="imgs">
                  <img src={image} alt="not found" />
                </div>
                <div className="content">
                  <div className="header">{title}</div>
                  <div className="meta price">$ {price}</div>
                  <div className="meta">{category}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });

    return <div className="productRenderList">{renderList}</div>;
  }
}

export default ProductComponent;
