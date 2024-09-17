import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const [productId, setProductId] = useState('');
  const navigate = useNavigate();

  const handleDelete = () => {
    // Get the products array from localStorage
    const productsString = localStorage.getItem('products');
    if (!productsString) {
      alert('No products found in local storage');
      return; // Exit the function if no products exist
    }

    // Parse the products string into an array
    const products = JSON.parse(productsString);

    // Find the index of the product with the given ID
    const productIndex = products.findIndex(
      (product) => product?.id === productId
    );

    if (productIndex !== -1) {
      // Remove the product from the array
      products.splice(productIndex, 1);

      // Update the products array in localStorage
      localStorage.setItem('products', JSON.stringify(products));

      alert('Product deleted successfully from local storage');

      // Optionally, navigate to another page after deletion
      navigate('/dashboardLayout');
    } else {
      alert('Product not found in local storage');
    }
  };

  return (
    <div className="p-5 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Enter Product ID to delete"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleDelete}
          className="w-full bg-red-600 text-white py-2 rounded"
        >
          Delete Product
        </button>
      </div>
    </div>
  );
};

export default Settings;
