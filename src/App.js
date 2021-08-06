import { useEffect, useState } from "react";
import Route from "./Routes";
import "./styles.css";
import productAPI from "./api/productAPI";


export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data:products } = await productAPI.getAll();
        setProducts(products);

      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  },[]);
  const onHandleRemove = async (id) => {
    try {
      const {data} = await productAPI.remove(id)
      const newProduct = products.filter((item) => item.id !== id);
      setProducts(newProduct);
    } catch (error) {
      console.log(error);
    }
    
  };
  const onHandleAdd = async (item) => {
    try {
      const { data } = await productAPI.add(item);
      setProducts([...products, data]);
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleEdit = async (item) => {
    try {
      const { data } = await productAPI.edit(item);
      const newProducts = products.map((product) => product.id == data.id ? data : product);
      setProducts(newProducts)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Route data={products} onRemove={onHandleRemove} onAdd={onHandleAdd} onEdit={onHandleEdit}/>
    </>
  );
}
