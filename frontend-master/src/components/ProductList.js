import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ProductList.css'; // Assuming you have some CSS for styling

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderQuantities, setOrderQuantities] = useState({}); // State for order quantities

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/products');
      setProducts(response.data.products); // Assuming response.data.products holds the product array
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle order submission
  const handleOrder = async (productId) => {
    const quantity = orderQuantities[productId] || 1; // Default to 1 if no quantity specified

    try {
      const response = await axios.post('http://localhost:5000/api/v1/orders/create', {
        email: 'user@example.com', // Replace with the actual user email (you might want to get this from user state)
        product_id: productId,
        quantity: quantity,
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Include JWT token from local storage
        }
      });

      console.log('Order created:', response.data);
      alert('Order placed successfully!'); // Notify user of successful order
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Failed to place order.'); // Notify user of failure
    }
  };

  // Handle quantity change for an order
  const handleQuantityChange = (productId, quantity) => {
    setOrderQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul className="product-list-items">
          {products.map(product => (
            <li key={product.id} className="product-item">
              <h2>{product.name}</h2>
              <img 
                src={product.image || "https://via.placeholder.com/150"} 
                alt={product.name} 
                className="product-image"
              />
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Stock: {product.stock}</p>

              {/* Quantity Input */}
              <input
                type="number"
                min="1"
                max={product.stock}
                defaultValue="1"
                onChange={(e) => handleQuantityChange(product.id, e.target.value)}
              />
              {/* Order Button */}
              <button onClick={() => handleOrder(product.id)}>
                Order
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;

























// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../styles/ProductList.css'; // Assuming you have some CSS for styling

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch products from API
//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/v1/products');
//       setProducts(response.data.products); // Assuming response.data.products holds the product array
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setLoading(false);
//     }
//   };

//   // Fetch products on component mount
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   if (loading) {
//     return <div>Loading products...</div>;
//   }

//   return (
//     <div className="product-list">
//       {products.length === 0 ? (
//         <p>No products available.</p>
//       ) : (
//         <ul className="product-list-items">
//           {products.map(product => {
//             console.log(product.image); // Log the image URL for debugging

//             return (
//               <li key={product.id} className="product-item">
//                 <h2>{product.name}</h2>
//                 {/* If product.image is not valid, show a placeholder */}
//                 <img 
//                   src={product.image || "https://via.placeholder.com/150"} 
//                   alt={product.name} 
//                   className="product-image"
//                 />
//                 <p>{product.description}</p>
//                 <p>Price: ${product.price}</p>
//                 <p>Stock: {product.stock}</p>
//               </li>
//             );
//           })}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ProductList;
