import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ErrorPage from "../ErrorPage/ErrorPage";

import milk from "../../assets/milk.png";
import Card from "../UI/Card";
import classes from "./ProductDetail.module.css";

import Product from "./Product";

const ProductDetail = () => {
  const { products } = useSelector((state) => state.products);
  const params = useParams();
  const product = products.find((product) => product.id === params.productId);

  if (!product) {
    return <ErrorPage />;
  }

  return (
    <div className={classes.details}>
      <Product
        title={product.title}
        price={product.price}
        url={product.url}
        description={product.description}
        quantity={product.quantity}
      />
    </div>
  );
};

export default ProductDetail;
