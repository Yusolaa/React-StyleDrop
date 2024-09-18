import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const STORAGE_QUOTA = 5 * 1024 * 1024; // 5 MB

const ProductDetails = ({ updateCartCount }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [storageExceeded, setStorageExceeded] = useState(false);

  useEffect(() => {
    // Check if the product exists in local storage first
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const localProduct = storedProducts.find((p) => p.id === parseInt(id));

    if (localProduct) {
      // If found in local storage, use the locally created product
      setProduct(localProduct);
      const storedProduct = JSON.parse(
        localStorage.getItem(localProduct.title)
      );
      if (storedProduct) {
        setQuantity(storedProduct.quantity);
      }
    } else {
      // If not found, fetch from the API
      const fetchData = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        const storedProduct = JSON.parse(localStorage.getItem(data.title));
        if (storedProduct) {
          setQuantity(storedProduct.quantity);
        }
      };
      fetchData();
    }

    // Check storage quota on component mount
    checkStorageQuota();
  }, [id]);

  // Check storage quota
  const checkStorageQuota = () => {
    let totalSize = 0;
    for (let key in localStorage) {
      if (localStorage.getItem(key)) {
        totalSize += new Blob([localStorage.getItem(key)]).size;
      }
    }
    setStorageExceeded(totalSize > STORAGE_QUOTA);
  };

  const handleAddToCart = () => {
    if (storageExceeded) {
      alert('Storage quota exceeded. Please remove some items to continue.');
      return;
    }

    try {
      const productInCart = JSON.parse(localStorage.getItem(product.title));
      let updatedProduct = { ...product, quantity: 1 };

      if (productInCart) {
        updatedProduct.quantity = productInCart.quantity + 1;
      }

      // Check if adding this item will exceed storage quota
      const itemSize = new Blob([JSON.stringify(updatedProduct)]).size;
      if (itemSize + getTotalStorageSize() > STORAGE_QUOTA) {
        alert('Storage quota exceeded. Please remove some items to continue.');
        return;
      }

      localStorage.setItem(product.title, JSON.stringify(updatedProduct));
      setQuantity(updatedProduct.quantity);
      updateCartCount(); // Update cart count
    } catch (e) {
      if (e.name === 'QuotaExceededError') {
        alert('Storage quota exceeded. Please remove some items to continue.');
      } else {
        console.error(e);
      }
    }
  };

  const incrementQuantity = () => {
    if (storageExceeded) {
      alert('Storage quota exceeded. Please remove some items to continue.');
      return;
    }

    const updatedQuantity = quantity + 1;
    setQuantity(updatedQuantity);
    const productInCart = { ...product, quantity: updatedQuantity };

    // Check if adding this item will exceed storage quota
    const itemSize = new Blob([JSON.stringify(productInCart)]).size;
    if (itemSize + getTotalStorageSize() > STORAGE_QUOTA) {
      alert('Storage quota exceeded. Please remove some items to continue.');
      return;
    }

    localStorage.setItem(product.title, JSON.stringify(productInCart));
    updateCartCount();
  };

  const decrementQuantity = () => {
    if (storageExceeded) {
      alert('Storage quota exceeded. Please remove some items to continue.');
      return;
    }

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

  const getTotalStorageSize = () => {
    let totalSize = 0;
    for (let key in localStorage) {
      if (localStorage.getItem(key)) {
        totalSize += new Blob([localStorage.getItem(key)]).size;
      }
    }
    return totalSize;
  };

  return (
    <div className="bg-white shadow-lg p-5 m-10 max-w-4xl flex flex-col md:flex-row gap-20 items-center">
      {product.image && (
        <img src={product.image} alt={product.title} className="w-80 h-80" />
      )}
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
