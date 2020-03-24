import React from 'react';
import {useParams} from "react-router-dom";

import "./Product.scss";

const Product = props => {

   let { id }= useParams();

  return (
    <>
      <p>Product</p>
      {
        id && <p>id : { id }</p>
      }
    </>
  );
};

export default Product;