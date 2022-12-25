import React from "react";
import Card from "../UI/Card";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import defaultImg from "../../assets/defaultImg.jpg";

const Product = ({ url, price, title, id, description, quantity }) => {
  return (
    <>
      <Card className={classes.product}>
        <Link to={`/products/${id}`} className={classes.link}>
          <img
            className={classes.image}
            src={url}
            onError={(e) => {
              e.target.src = defaultImg;
            }}
            alt="Product"
          />
          <h2>{title}</h2>
          <p>${Number(price).toFixed(2)}</p>
          <p>{description}</p>
          <p>
            <strong>Quantité</strong>: {quantity}
          </p>
        </Link>
      </Card>
    </>
  );
};

export default Product;
