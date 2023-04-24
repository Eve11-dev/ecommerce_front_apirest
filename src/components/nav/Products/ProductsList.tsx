import { getProducts } from "../../../api/products.api";

export const ProductsList = () => {
    const products = getProducts();

    const fetcProducts = async () => {
        const Products = await getProducts();
         console.log(products);
    };



    fetcProducts()
  return <div>ProductsList</div>
  
}
