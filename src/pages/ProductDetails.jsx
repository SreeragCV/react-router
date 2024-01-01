import React from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetails() {

  const params = useParams();

  return (
    <div>
      <h1>PRODUCT DETAILS...</h1>
      <ul>
       {params.productId}
      </ul>
    </div>
  );
}

export default ProductDetails;
