import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Product.css'; // Import the CSS file

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from the API when the component mounts
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/v1/products')
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching the products: ', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading products...</div>; // Add loading class
  }

  return (
    <div className="product-container">
      <h1>Product List</h1>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', borderRadius: '5px' }} /> {/* Display product image */}
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Stock: {product.stock}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Product;



























// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import productService from '../server/productService'; // Import your product service

// const Product = () => {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);

//   // Fetch products when the component is mounted
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const data = await productService.getAllProducts(); // Fetch products using the updated function
//         console.log('Fetched products:', data);

//         if (Array.isArray(data)) {
//           setProducts(data);
//         } else {
//           console.error('Expected an array but received:', data);
//           setError('Unexpected data format received from the server.');
//         }
//       } catch (err) {
//         console.error('Failed to fetch products:', err);
//         setError('Failed to fetch products. Please try again later.');
//       }
//     };

//     // Directly call fetchProducts without checking for a login token
//     fetchProducts();
//   }, []);

//   // Function to handle placing an order (requires login)
//   const handleOrderNow = async (product) => {
//     const token = localStorage.getItem('accessToken');
//     if (!token) {
//       setError('You must be logged in to place an order');
//       navigate('/login');
//       return;
//     }

//     const order = {
//       productId: product.id,
//       quantity: 1, // Example quantity; adjust as needed
//       totalPrice: product.price, // Example total price; adjust as needed
//     };

//     try {
//       await productService.addOrder(order); // Call the order service to place the order
//       alert('Order placed successfully!');
//     } catch (err) {
//       console.error('Error placing order:', err);
//       setError('Failed to place order. Please try again.');
//     }
//   };

//   return (
//     <div className="product-list-container">
//       <h1>ORDER YOUR LATEST PHONES</h1>
//       {error && <p className="error">{error}</p>}
//       <div className="product-list">
//         {products.length > 0 ? (
//           products.map((product) => (
//             <div key={product.id} className="product-item">
//               <div className="product-image-container">
//                 <img
//                   src={`data:image/jpeg;base64,${product.image}`}
//                   alt={product.name} // Ensure 'product.name' exists in your API response
//                   className="product-image"
//                 />
//               </div>
//               <h2>{product.name}</h2> {/* Ensure this property exists */}
//               <p>{product.description}</p> {/* Include the product description */}
//               <p>${product.price}</p>
//               <button onClick={() => handleOrderNow(product)}>Order Now</button>
//             </div>
//           ))
//         ) : (
//           <p>No products found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Product;


























// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import productService from '../server/productService'; // Import your product service

// const Product = () => {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);

//   // Fetch products when the component is mounted
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const data = await productService.getAllProducts(); // Fetch products using the updated function
//         console.log('Fetched products:', data);

//         if (Array.isArray(data)) {
//           setProducts(data);
//         } else {
//           console.error('Expected an array but received:', data);
//           setError('Unexpected data format received from the server.');
//         }
//       } catch (err) {
//         console.error('Failed to fetch products:', err);
//         setError('Failed to fetch products. Please try again later.');
//       }
//     };

//     // Directly call fetchProducts without checking for a login token
//     fetchProducts();
//   }, []);

//   // Function to handle placing an order (requires login)
//   const handleOrderNow = async (product) => {
//     const token = localStorage.getItem('accessToken');
//     if (!token) {
//       setError('You must be logged in to place an order');
//       navigate('/login');
//       return;
//     }

//     const order = {
//       productId: product.id,
//       quantity: 1, // Example quantity; adjust as needed
//       totalPrice: product.price, // Example total price; adjust as needed
//     };

//     try {
//       await productService.addOrder(order); // Call the order service to place the order
//       alert('Order placed successfully!');
//     } catch (err) {
//       console.error('Error placing order:', err);
//       setError('Failed to place order. Please try again.');
//     }
//   };

//   return (
//     <div className="product-list-container">
//       <h1>ORDER YOUR LATEST PHONES</h1>
//       {error && <p className="error">{error}</p>}
//       <div className="product-list">
//         {products.length > 0 ? (
//           products.map((product) => (
//             <div key={product.id} className="product-item">
//               <div className="product-image-container">
//                 <img
//                   src={`data:image/jpeg;base64,${product.image}`}
//                   alt={product.name}
//                   className="product-image"
//                 />
//               </div>
//               <h2>{product.name}</h2>
//               <p>${product.price}</p>
//               <button onClick={() => handleOrderNow(product)}>Order Now</button>
//             </div>
//           ))
//         ) : (
//           <p>No products found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Product;
