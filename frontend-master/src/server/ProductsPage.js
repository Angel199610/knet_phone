import React from 'react';
// import Product from '../components/product';
import ProductList from '../components/ProductList'; 
// import AddProduct from '../components/AddProduct';

const ProductsPage = () => {
  return (
    <div>
      <h1>Knet Products in stock</h1>
      {/* <AddProduct /> */}
      {/* <Product /> */}
      <ProductList />  {/* List of all products */}
    </div>
  );
};

export default ProductsPage;
