import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Nav } from "./components/nav/Nav";
import { CssBaseline, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { ProductsDetails } from "./pages/ProductsDetails";

function App() {
  const [products, setProducts] = useState([]);

  const API_URL = "http://localhost:3000";
  const PRODUCT_ENDPOINT = "products";

  const getProducts = async () => {
    const response = await fetch(`${API_URL}/${PRODUCT_ENDPOINT}`);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="/products" element={<Products />} />
        <Route path="products/:id" element={<ProductsDetails />} />
      </Routes>
    </div>
  );
}

export default App;
