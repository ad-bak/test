import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

import classes from "./AllProducts.module.css";

const AllProducts = () => {
  const { products } = useSelector((state) => state.products);
  console.log(products);
  return (
    <section>
      <h1>Tous les produits</h1>
      <div className={classes.products}>
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              url={product.url}
              description={product.description}
              quantity={product.quantity}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AllProducts;
