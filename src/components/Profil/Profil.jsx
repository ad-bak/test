import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { adminActions } from "../../store/admin-slice.js";
import Card from "../UI/Card";
import classes from "./Profil.module.css";

const Profil = () => {
  const { admin } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isError, setError] = useState(false);
  console.log(admin);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      emailRef.current.value === "supermarket@supermarket.com" &&
      passwordRef.current.value === "supermarket"
    ) {
      return dispatch(adminActions.login());
    } else {
      setError(true);
      dispatch(adminActions.logout());
    }
  };
  const form = (
    <Card className={classes.login}>
      <form className={classes.control} onSubmit={submitHandler}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={emailRef} />
        <label htmlFor="password">Mot de passe</label>
        <input type="password" id="password" ref={passwordRef} />
        <div className={classes.actions}>
          <button className={classes.button}>Se connecter</button>
        </div>
        {isError && (
          <p className={classes.error}>Mauvais email ou mot de passe.</p>
        )}
      </form>
    </Card>
  );

  const date = new Date().toLocaleDateString();

  const logoutHandler = () => {
    dispatch(adminActions.logout());
  };

  const welcome = (
    <Card className={classes.welcome}>
      <h2>Bienvenue, admin!</h2>
      <h4>Aujourd'hui c'est : {date}</h4>
      <button onClick={logoutHandler}>Déconnexion</button>
    </Card>
  );

  return (
    <>
      {admin === false && form} {admin === true && welcome}
    </>
  );
};
export default Profil;
