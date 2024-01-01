import React from "react";
import { Link } from "react-router-dom";

function ProductsPage() {
  const PRODUCTS = [
    { id: "p1", "product-name": "book" },
    { id: "p2", "product-name": "chart" },
    { id: "p3", "product-name": "pencil" },
    { id: "p4", "product-name": "pen" },
  ];

  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {PRODUCTS.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>
                <p>{product["product-name"]}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ProductsPage;
