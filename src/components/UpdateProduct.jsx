import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data);
        setIsLoading(false);
      } catch (error) {
        setError('Error fetching product details');
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError(null);

    if (!/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif))$/i.test(product.image)) {
      setError('Please enter a valid image URL (png, jpg, jpeg, gif)');
      return;
    }

    if (product.price <= 0) {
      setError('Price must be greater than 0');
      return;
    }

    try {
      await axios.put(`https://fakestoreapi.com/products/${id}`, product);
      setSuccess(true);
      setTimeout(() => {
        navigate('/dashboardLayout');
      }, 2000);
    } catch (error) {
      setError('Error updating product. Please try again later.');
    }
  };

  if (isLoading) {
    return (
      <div className="text-center text-xl py-10">Loading product data...</div>
    );
  }

  return (
    <div className="p-5 max-w-xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Update Product</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        {error && <div className="text-red-600 font-semibold">{error}</div>}
        {success && (
          <div className="text-green-600 font-semibold">
            Product updated successfully!
          </div>
        )}

        <input
          type="text"
          name="title"
          value={product.title || ''}
          onChange={handleChange}
          placeholder="Product Title"
          className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
          required
        />

        <input
          type="number"
          name="price"
          value={product.price || ''}
          onChange={handleChange}
          placeholder="Price"
          className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
          required
        />

        <textarea
          name="description"
          value={product.description || ''}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
          rows="4"
          required
        />

        <input
          type="text"
          name="category"
          value={product.category || ''}
          onChange={handleChange}
          placeholder="Category"
          className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
          required
        />

        <input
          type="url"
          name="image"
          value={product.image || ''}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
