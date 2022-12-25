import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsActions } from "../../store/product-slice";
import AddProduct from "./AddProduct";
import classes from "./ControlProducts.module.css";
import EditProduct from "./EditProduct";

const ControlProducts = () => {
  const { admin } = useSelector((state) => state.admin);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showEditProduct, setShowEditProduct] = useState(false);
  if (!admin) {
    return (
      <div>
        <h1 className={classes.msg}>
          Seul l'administrateur peut accéder à cette page !
        </h1>
      </div>
    );
  }
  const removeItem = (id) => {
    dispatch(productsActions.remove(id));
  };

  const editButtonHandler = () => {
    setShowEditProduct(true);
    setShowAddProduct(false);
  };

  const addButtonHandler = () => {
    setShowAddProduct(true);
    setShowEditProduct(false);
  };

  const closeForm = () => {
    setShowAddProduct(false);
    setShowEditProduct(false);
  };

  return (
    <div className={classes.list}>
      <h1>Produits disponibles</h1>
      <ul className={classes.items}>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <div>
                <h2>{product.title}</h2>
                <p>${product.price}</p>
                <p>
                  <strong>Quantité: </strong>
                  {product.quantity}
                </p>
              </div>
              <div>
                <button onClick={() => removeItem(product.id)}>
                  Supprimer
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className={classes.buttons}>
        <button className={classes["control-btn"]} onClick={addButtonHandler}>
          Ajouter un produit
        </button>
        <button className={classes["control-btn"]} onClick={editButtonHandler}>
          Modifier un produit
        </button>
      </div>

      {showAddProduct && <AddProduct onclose={closeForm} />}
      {showEditProduct && <EditProduct onClose={closeForm} />}
    </div>
  );
};

export default ControlProducts;
