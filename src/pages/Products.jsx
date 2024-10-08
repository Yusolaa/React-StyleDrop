import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Products = ({ products, setProducts }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const navigate = useNavigate();

  // Fetch products from API and localStorage
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        const apiProducts = res.data; // API products

        // Retrieve products from localStorage
        const localProducts =
          JSON.parse(localStorage.getItem('products')) || [];

        // Combine both localStorage products and API products
        const combinedProducts = [...localProducts, ...apiProducts];

        setProducts(combinedProducts); // Update the state with combined products
        setSearchResult(combinedProducts); // Set initial search results
      } catch (error) {
        console.error('Error fetching the products:', error);
      }
    };

    if (products.length === 0) fetchData();
  }, [products, setProducts]);

  // Handle search logic
  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product.category.toLowerCase().includes(searchWord.toLowerCase())
    );
    setSearchResult(filtered);
  };

  const handleNavigate = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div className="p-5">
      <div className="mb-10 flex gap-5 justify-center">
        <input
          className="p-2 border border-gray-300 rounded-md"
          type="text"
          placeholder="Search by product category..."
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <button
          className="bg-gray-950 px-4 py-2 rounded-lg text-white"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {searchResult.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {searchResult.map((product) => (
            <div
              onClick={() => handleNavigate(product.id)}
              key={product.id}
              className="bg-white shadow-lg rounded-lg p-4 max-w-xs mx-auto cursor-pointer "
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="space-y-3">
                <p className="mt-2 text-lg font-bold truncate">
                  {product.title}
                </p>
                <p className="text-gray-500">Category: {product.category}</p>
                <p className="text-sm text-gray-700 truncate">
                  {product.description}
                </p>
                <p className="text-green-600 font-bold">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found for "{searchWord}"</p>
      )}
    </div>
  );
};

export default Products;
