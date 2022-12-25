import Navbar from "./Navbar";

import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default Layout;
