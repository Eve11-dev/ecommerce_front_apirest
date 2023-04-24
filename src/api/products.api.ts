import { Products } from "../pages/Products";

export const getProducts = async () => {

   const baseUrl= import.meta.env.VITE_API_URL;
   const response = await fetch ('${API_URL}/Products');
   const Products = await response.json();
   return Products;
}