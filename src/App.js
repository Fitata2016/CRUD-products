
import { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ProductsForm from './components/ProductsForm';

function App() {

  const productsDefault = [
    {
      id: 1,
      name: "Pollo Frito",
      category: "comida",
      price: 2500,
      isAvailable: true
    },
    {
      id: 2,
      name: "Jabón",
      category: "aseo",
      price: 1500,
      isAvailable: false
    }
  ]
// ESTADO PRIONCIPAL
    const [products, setProducts] = useState (productsDefault);
    const [productEdit, setProductEdit] = useState (null);


    const addProduct = product => {
      setProducts([...products, product]);
    }

    const removeProduct = id => {
      setProducts(products.filter(product => product.id !== id))
    }
    const selectProduct = product => setProductEdit(product);

    const upDateProduct= productInfo => {
      const index = products.findIndex(product => 
      product.id === productInfo.id
      );
      products[index] = productInfo
      setProducts([...products])
    }
 
  return (
    <div className="App">
      <ProductsForm 
      addProduct = {addProduct}
      productEdit = {productEdit}
      selectProduct = {selectProduct}
      upDateProduct = {upDateProduct}
      />
      <ProductList 
          products={products} 
          removeProduct={removeProduct}
          selectProduct={selectProduct}
      />
    </div>
  );
}

export default App;
