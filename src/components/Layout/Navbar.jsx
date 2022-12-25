import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//import dispatch from "react-redux";
import { useDispatch } from "react-redux";
import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { admin } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  console.log(admin);

  console.log(admin);
  return (
    <div className={styles.navbox}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="logo" className={styles.img} />
            <h4>L'Epicerie</h4>
          </Link>
        </div>
        <ul className={styles.links}>
          {admin === true && (
            <li>
              <Link to="/gerer">Gerer</Link>
            </li>
          )}
          <li>
            <Link to="/products">Produits</Link>
          </li>
          <li>
            <Link to="/profil">Profil</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
