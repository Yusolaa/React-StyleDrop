import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [key, setKey] = useState('');
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log('This is product detail response', res.data.title);
      setProduct(res.data);
      setKey(res.data.title);
    };
    fetchData();
  }, [id]);

  const handleAddToCart = () => {
    localStorage.setItem(key, JSON.stringify(product));
  };
  return (
    <div className="bg-white shadow-lg p-5 m-10 max-w-4xl flex flex-col md:flex-row gap-20  items-center">
      <img src={product.image} alt={product.image} className="w-80 h-80" />
      <div className="space-y-3">
        <p className="mt-2 text-lg font-bold">{product.title}</p>
        <p className="text-green-600 font-bold text-2xl">${product.price}</p>
        <button
          onClick={handleAddToCart}
          className="bg-yellow-500 text-white rounded-lg p-2 px-4 hover:bg-yellow-400"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
