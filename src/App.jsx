import "./App.css";
import { Routes, Route, redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AllProducts from "./components/Products/AllProducts";
import ProductDetail from "./components/Products/ProductDetail";
import Profil from "./components/Profil/Profil";
import ControlProducts from "./components/ControlProducts/ControlProducts";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/profil" element={<Profil />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/gerer" element={<ControlProducts />} />
          <Route path="/" element={<AllProducts />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
