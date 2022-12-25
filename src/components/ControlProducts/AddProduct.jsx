import React, { useRef } from "react";
import classes from "./AddProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../store/product-slice";

const AddProduct = ({ onclose }) => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const titleInputRef = useRef();
  const priceInputRef = useRef();
  const urlInputRef = useRef();
  const descriptionInputRef = useRef();
  const quantityInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const item = {
      id: `p${products.length + 1}`,
      title: titleInputRef.current.value,
      price: priceInputRef.current.value,
      url: urlInputRef.current.value,
      description: descriptionInputRef.current.value,
      quantity: quantityInputRef.current.value,
    };
    dispatch(productsActions.add(item));
    onclose();
  };
  return (
    <form className={classes.control} onSubmit={submitHandler}>
      <label htmlFor="title">Titre</label>
      <input ref={titleInputRef} type="text" id="title" required />
      <label htmlFor="price">Prix</label>
      <input ref={priceInputRef} type="number" id="price" required />
      <label htmlFor="url">URL de l'image</label>
      <input ref={urlInputRef} type="text" id="url" />
      <label htmlFor="description">Description</label>
      <input ref={descriptionInputRef} type="text" id="description" />
      <label htmlFor="quantity">Quantité</label>
      <input ref={quantityInputRef} type="number" id="quantity" />
      <button className={classes.button}>Ajouter</button>
    </form>
  );
};

export default AddProduct;
