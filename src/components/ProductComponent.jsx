import {React,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {fetchAllProduct} from "../Api/Allproducts/ActionProducts";

function ProductComponent() {
  const product = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProduct());
  }, []);


  let result = product.allProducts.productAll;
  
  


// let products = null;
  if(result !== undefined && result !== null){
  const renderList = result.map((product,index) => {
    const { id, title, image, category, price } = product;

    return (
      <div className="ui grid container" key={id}>
        <div className="four column wide maxWidth" >
          <Link to={`/product/${id}`}>
            <div className="row">
              <div className="ui link cards ">
                <div className="card">
                  <div className="image">
                    <img src={image} alt="not found" />
                  </div>
                  <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta price">$ {price}</div>
                    <div className="meta">{category}</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  
  });

  return <div>{renderList}</div>;
}
}

export default ProductComponent;
