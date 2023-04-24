import { getProducts } from "../../../api/products.api";

export const ProductsList = () => {
    const products = getProducts();
  return <div>ProductsList</div>
  
}
