import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  /*Our Error was:
  We were trying to set the filtered results directly to searchWord, which should instead be used to render the filtered data.
   */
  const [products, setProducts] = useState([]);
  const [searchResult, setsearchResult] = useState([]);
  const [searchWord, setsearchWord] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://dummyjson.com/products');
      setProducts(res.data.products);
      console.log(res.data);

      setsearchResult(res.data.products);
    };
    fetchData();
  }, []);

  // Handle search logic
  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product.category.toLowerCase().includes(searchWord.toLowerCase())
    );
    setsearchResult(filtered);
  };

  const handleNavigate = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div className="p-5">
      <div className="mb-10 flex gap-5 justify-center">
        <input
          className="p-2"
          type="text"
          placeholder="Search by category..."
          value={searchWord}
          onChange={(e) => setsearchWord(e.target.value)}
        />
        <button
          className="bg-gray-950 px-2 py-2 rounded-lg text-white"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {searchResult.length > 0 ? (
        searchResult.map((product) => (
          <div
            key={product.id}
            className="space-y-1 mt-4 bg-white shadow-lg p-4 max-w-xl"
          >
            <p>{product.title}</p>
            <img src={product.images} alt="Product ....." className="w-32" />
            <p>{product.price}</p>
            <p>Category: {product.category}</p>
            <p
              onClick={() => handleNavigate(product.id)}
              className="truncate text-ellipsis"
            >
              {product.description}
            </p>
          </div>
        ))
      ) : (
        <p>No products found for "{searchWord}"</p>
      )}
    </div>
  );
};

export default Products;
