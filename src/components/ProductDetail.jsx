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
  let result = product.selectsData;
  const { image, title, price, category, description } = result;

  // console.log(Array.isArray(result))
  return (
    <div className="ui grid container component">
      {Object.keys(result).length === 0 ? (
        <div>
          <h1>...Loding</h1>
        </div>
      ) : (
        // <div className="ui placeholder segment">
        //   <div className="ui two column stackble center  aligned grid">
        //     <div className="ui vertical divider">and</div>
        //     <div className="middle aligned row">
        //       <div className="column lp">
        //         <img className="ui fluid image" src={image} />
        //       </div>
        //       <div className="column rp">
        //         <h1>{title}</h1>
        //         <h2>
        //           <a className="ui teal tag label">${price}</a>
        //         </h2>
        //         <h3 className="ui brown block header">{category}</h3>
        //         <p>{description}</p>
        //         <div className="ui vertical animated button" tabIndex="0">
        //           <div className="hidden content">
        //             <i className="shop icon"></i>
        //           </div>
        //           <div className="visible content">Add To Cart</div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>

        <section className="main_section">
          <div className="data">
            <div className="left_data">
              <img src="" alt="" />
            </div>
            <div className="right_data"></div>
          </div>
        </section>
      )}
    </div>
  );
}

export default ProductDetail;
