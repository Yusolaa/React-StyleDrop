import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      console.log('This is product detail response', res);
      setProduct(res.data);
    };
    fetchData();
  }, [id]);
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductDetails;
