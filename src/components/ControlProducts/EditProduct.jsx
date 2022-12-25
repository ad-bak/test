import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../store/product-slice";

import classes from "./AddProduct.module.css";

const EditProduct = ({ product, onClose }) => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const findTitleInputRef = useRef();
  const titleInputRef = useRef();
  const priceInputRef = useRef();
  const urlInputRef = useRef();
  const descriptionInputRef = useRef();
  const quantityInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const item = {
      findTitle: findTitleInputRef.current.value,
      title: titleInputRef.current.value,
      price: priceInputRef.current.value,
      url: urlInputRef.current.value,
      description: descriptionInputRef.current.value,
      quantity: quantityInputRef.current.value,
    };
    dispatch(productsActions.edit(item));
    onClose();
  };
  return (
    <form className={classes.control} onSubmit={submitHandler}>
      <h2>Modifier {product}</h2>
      <label htmlFor="findTitle">
        Produit que vous voulez modifier <small>(nom exact!)</small>
      </label>
      <input ref={findTitleInputRef} type="text" id="id" required />
      <label htmlFor="title">Modifier Titre</label>
      <input ref={titleInputRef} type="text" id="title" required />
      <label htmlFor="price">Modifier Prix</label>
      <input ref={priceInputRef} type="number" id="price" required />
      <label htmlFor="url">Modifier URL de l'image</label>
      <input ref={urlInputRef} type="text" id="url" />

      <label htmlFor="description">Modifier Description</label>
      <input ref={descriptionInputRef} type="text" id="description" />
      <label htmlFor="quantity">Modifier Quantité</label>
      <input ref={quantityInputRef} type="number" id="quantity" />
      <button className={classes.button}>Modifier</button>
    </form>
  );
};

export default EditProduct;
