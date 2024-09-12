import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [key, setKey] = useState('');
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
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
    <div>
      <p>{product.title}</p>
      <img src={product.images} alt="Product ....." className="w-32" />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default ProductDetails;
