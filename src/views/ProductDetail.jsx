import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchSelect } from "../Api/SelectProduct/ActionSelect";
// import { ,RemoveSelectedProduct } from "../Api/SelectProduct/ActionSelect";

function ProductDetail() {
  const { productId } = useParams();

  const product = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSelect(productId));

    //  return()=>{
    //   dispatch(RemoveSelectedProduct())
    //  }
  }, [dispatch, productId]);

  var result = product.selectsData;
 

  let results = "";
  if (result !== null && result !== undefined) {
    return (
      <div className="ui grid container component">
        {Object.keys(result).length === 0 ? (
          <div>
            <h1>...Loding</h1>
          </div>
        ) : (
          <section className="main_section">
            <div className="data">
              <div className="left_data">
                <img src={result.image} alt={result.title} />
              </div>
              <div className="right_data">
                <h1>{result.title}</h1>
                <h2 className="rate">
                  $ <a>{result.price} </a>
                </h2>
                <h3 className="">{result.category}</h3>
                <p>{result.description}</p>
                <button className="btn">add to card</button>
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }
}

export default ProductDetail;
