import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ updateCartCount }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
      const storedProduct = JSON.parse(localStorage.getItem(res.data.title));
      if (storedProduct) {
        setQuantity(storedProduct.quantity);
      }
    };
    fetchData();
  }, [id]);

  const handleAddToCart = () => {
    const productInCart = JSON.parse(localStorage.getItem(product.title));
    let updatedProduct = { ...product, quantity: 1 };

    if (productInCart) {
      updatedProduct.quantity = productInCart.quantity + 1; // Increment quantity
    }

    localStorage.setItem(product.title, JSON.stringify(updatedProduct));
    setQuantity(updatedProduct.quantity);
    updateCartCount(); // Update cart count
  };

  const incrementQuantity = () => {
    const updatedQuantity = quantity + 1;
    setQuantity(updatedQuantity);
    const productInCart = { ...product, quantity: updatedQuantity };
    localStorage.setItem(product.title, JSON.stringify(productInCart));
    updateCartCount();
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      const updatedQuantity = quantity - 1;
      setQuantity(updatedQuantity);
      const productInCart = { ...product, quantity: updatedQuantity };
      localStorage.setItem(product.title, JSON.stringify(productInCart));
    } else {
      setQuantity(0);
      localStorage.removeItem(product.title);
    }
    updateCartCount();
  };

  return (
    <div className="bg-white shadow-lg p-5 m-10 max-w-4xl flex flex-col md:flex-row gap-20 items-center">
      <img src={product.image} alt={product.title} className="w-80 h-80" />
      <div className="space-y-3">
        <p className="mt-2 text-lg font-bold">{product.title}</p>
        <p className="text-green-600 font-bold text-2xl">${product.price}</p>

        {quantity === 0 ? (
          <button
            onClick={handleAddToCart}
            className="bg-yellow-500 text-white rounded-lg p-2 px-4 hover:bg-yellow-400"
          >
            Add to cart
          </button>
        ) : (
          <div className="flex items-center gap-3">
            <button
              onClick={decrementQuantity}
              className="bg-red-500 text-white rounded-lg p-2 px-4 hover:bg-red-400"
            >
              -
            </button>
            <span className="text-xl font-bold">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="bg-green-500 text-white rounded-lg p-2 px-4 hover:bg-green-400"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
