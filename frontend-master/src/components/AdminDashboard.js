// src/components/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getToken, logoutUser } from '../server/authService';
import '../styles/AdminDashBoard.css'; // Import your CSS

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });

  useEffect(() => {
    fetchProducts();
    fetchOrders(); // Fetch orders on component mount
  }, []);

  const fetchProducts = async () => {
    const token = getToken();
    try {
      const response = await axios.get('http://localhost:5000/api/v1/products', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchOrders = async () => {
    const token = getToken();
    try {
      const response = await axios.get('http://localhost:5000/api/v1/orders', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(response.data.orders);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleAddProduct = async () => {
    const token = getToken();
    try {
      const response = await axios.post(
        'http://localhost:5000/api/v1/products',
        newProduct,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setProducts([...products, response.data.product]);
      setNewProduct({ name: '', price: '' });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleLogout = () => {
    logoutUser();
    window.location.reload();
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>

      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>

      <div className="add-product-form">
        <h2>Add Product</h2>
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Order ID: {order.id} - Total: ${order.total} - Status: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;















// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import UserList from './UserList';
// import ProductList from './ProductList';
// import AdminNavbar from './AdminNavbar';

// const AdminDashboard = () => {
//   return (
//     <div className="admin-dashboard">
//       <AdminNavbar />
//       <div className="admin-content">
//         <h2>Admin Dashboard</h2>
//         <Routes>
//           <Route path="/" element={<UserList />} />
//           <Route path="/users" element={<UserList />} />
//           <Route path="/products" element={<ProductList />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
