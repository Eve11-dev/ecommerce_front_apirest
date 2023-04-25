import { useEffect, useState } from "react";
import { getProducts } from "../../../api/products.api";
import { Grid } from "@mui/material";

export const ProductsList = () => {

  const [Products, setProduct] = useState()
    const products = getProducts();

    const fetchProducts = async () => {
        const Products = await getProducts();
         setProduct(Products);
    };


useEffect(() =>{
  fetchProducts();
}, [])

  return 
  <div>
    <h1>Products</h1>
    <Grid container>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md= {4} lg={3} key={product.id}>
          <h2>{product.name} </h2>
          <p>{product.description} </p>
          <p>{product.price} </p>
          </Grid>
      ))}
    </Grid>
  </div>
  
}
