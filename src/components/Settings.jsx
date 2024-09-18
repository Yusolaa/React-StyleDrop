import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const [productId, setProductId] = useState('');
  const navigate = useNavigate();

  const handleDelete = () => {
    const productsString = localStorage.getItem('products');
    if (!productsString) {
      alert('No products found in local storage');
      return;
    }

    const products = JSON.parse(productsString);

    const numericProductId = parseInt(productId, 10);

    const productIndex = products.findIndex(
      (product) => product?.id === numericProductId
    );

    if (productIndex !== -1) {
      // Remove the product from the array
      products.splice(productIndex, 1);

      // Update the products array in localStorage
      localStorage.setItem('products', JSON.stringify(products));

      alert('Product deleted successfully');

      navigate('/products');
    } else {
      alert('Product not found');
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
